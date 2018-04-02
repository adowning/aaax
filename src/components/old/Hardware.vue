<!-- eslint-disable -->
<template>
<div>
      <q-tabs class="q-pa-lg" inverted color="secondary" align="justify" v-model="selectedTab">
        <q-tab default name="list" slot="title" label="List" />
        <q-tab name="reader" slot="title" label="QR Checkout" />
        <q-tab-pane name="list">
  <q-table
    title="Assets"
    :data="serverData"
    :columns="columns"
        :loading="loading"

  >
   <q-tr slot="body" slot-scope="props" :props="props">
             <q-td key="id" :props="props"></q-td>
      
             <q-td key="asset_tag" :props="props">{{ props.row.asset_tag }}</q-td>

         <q-td key="model" :props="props">{{ props.row.model }}</q-td>
        <q-td key="category" :props="props">{{ props.row.category }}
       
        </q-td>
        <!-- <q-td key="status_label" :props="props">{{ props.row.status_label }}</q-td> -->
        <q-td key="assigned_to" :props="props">{{ props.row.assigned_to }}</q-td>
        <q-td key="location" :props="props">{{ props.row.location }}</q-td>
        <q-td key="available_actions" :props="props"></q-td>
  
           <q-td key="asdf" :props="props">
          <div class="row items-center justify-between no-wrap">
			  
            <q-btn v-if="!props.row.assigned_to" size="sm"  small square color="amber" @click="checkOut(props.row.id, props.row.available_actions, props.row.assigned_to)" class="q-mr-xs" >Check Out</q-btn>
            <q-btn v-if="props.row.assigned_to" size="sm"  small square color="purple" @click="checkIn(props.row.id, props.row.available_actions, props.row.assigned_to)" class="q-mr-sm" >Check In</q-btn>
        
          </div>
           </q-td>
   </q-tr>
  </q-table>
        </q-tab-pane>
        <q-tab-pane  v-show="!loading" name="reader">

  <qrcode-reader @init="onInit" @decode="onDecode">
  <b>{{overlay}}</b>
</qrcode-reader>
     
        </q-tab-pane>
          <q-spinner  v-show="loading" color="secondary" :size="80" ></q-spinner>

      </q-tabs>
</div>
</template>
<script>
/* eslint-disable */
import QrcodeReader from './QRReader'
import Vue from 'vue'
Vue.component('qrcode-reader', QrcodeReader)
export default {
  data: () => ({
    loading: true,
    selectedTab: 'tab-1',
    overlay: '',
    multipleSelect: [],
    serverPagination: {
      page: 1
    },
    columns: [
      {
        name: 'id',
        label: '',
        field: 'id',
        align: 'left',
        visible: false
      },
      {
        name: 'asset_tag',
        label: 'Asset',
        field: 'asset_tag',
        align: 'left'
      },
      {
        label: 'Model',
        name: 'model',
        align: 'left',

        field: 'model'
      },
      {
        label: 'Category',
        name: 'category',
        align: 'left',

        field: 'category'
      },
      {
        label: 'Assigned To',
        name: 'assigned_to',
        align: 'left',

        field: 'assigned_to'
      },
      {
        label: 'Location',
        name: 'location',
        align: 'left',

        field: 'location'
      },
      {
        name: '__slot:actions',
        align: 'left',

        titleClass: 'center aligned',
        dataClass: 'center aligned'
      },
      {
        name: 'available_actions',
        label: '',
        align: 'left',
        visible: false,
        titleClass: 'center aligned',
        dataClass: 'center aligned'
      },
      {
        name: 'asdf',
        label: '',
        align: 'left',
        titleClass: 'center aligned',
        dataClass: 'center aligned'
      }
    ],
    serverData: []
  }),
  methods: {
    selectThirdTab() {
      this.selectedTab = 'tab-3'
    },
    onDecode(content) {
      console.log(content)
    },

    onLocate(points) {
      // ...
    },
    async onInit(promise) {
      // show loading indicator
      console.log('l')
      console.log(this.loading)
      this.loading = true
      try {
        await promise

        // successfully initialized
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          // user denied camera access permisson
        } else if (error.name === 'NotFoundError') {
          // no suitable camera device installed
        } else if (error.name === 'NotSupportedError') {
          // page is not served over HTTPS (or localhost)
        } else if (error.name === 'NotReadableError') {
          // maybe camera is already in use
        } else if (error.name === 'OverconstrainedError') {
          // passed constraints don't match any camera. Did you requested the front camera although there is none?
        } else {
          // browser is probably lacking features (WebRTC, Canvas)
        }
      } finally {
        // hide loading indicator
        console.log(this.loading)
        this.loading = false
      }
    },
    checkIn(assetId, actions, assigned_to) {
      if (!actions.checkin || !assigned_to) {
        console.log('not gonna hapn capnxxx')
        return
      }
      this.$snipeit
        .post('hardware/checkin', { assigned_asset: assetId })
        .then(response => {
          console.log(response)
          this.selected = null
          this.$router.go(this.$router.currentRoute)
          // this.request(20, 0)
        })
        .catch(e => {
          console.log(e)
        })
    },
    checkOut(assetId, actions, assigned_to) {
      if (!actions.checkout || assigned_to) {
        console.log('not gonna hapn capn')
        return
      }

      this.$snipeit
        .post('hardware/checkout', {
          assigned_user: 1,
          assigned_asset: assetId
        })
        .then(response => {
          console.log(response)
          this.selected = null
          this.$router.go(this.$router.currentRoute)
          // this.request(20, 0)
        })
        .catch(e => {
          console.log(e)
        })
    },
    request({ pagination, filter }) {
      console.log('updating')
      this.loading = true
      this.$snipeit
        .get('hardware')
        .then(({ data }) => {
          this.serverPagination = pagination
          this.serverPagination.rowsNumber = data.rowsNumber
          for (var item of data.rows) {
            item.model = item.model.name
            item.category = item.category.name
            if (item.location) {
              item.location = item.location.name
            }
            if (item.status_label) {
              item.status_label = item.status_label.name
            }
            if (item.assigned_to) {
              item.assigned_to = item.assigned_to.name
            }
            console.log(item.available_actions.length)

            // for(var action of item.available_actions){
            //     console.log(action)
            // }
          }
          console.log(data.rows)
          // then we update the rows with the fetched ones
          this.serverData = data.rows

          // finally we tell QTable to exit the "loading" state
          this.loading = false
        })
        .catch(error => {
          // there's an error... do SOMETHING

          // we tell QTable to exit the "loading" state
          this.loading = false
        })
    }
  },
  mounted() {
    // once mounted, we need to trigger the initial server data fetch
    this.request({
      pagination: this.serverPagination,
      filter: this.filter
    })
  }
}
</script>
<style scoped>
.qrcode-reader {
  max-width: 600px;
  max-height: 600px;
}
</style>