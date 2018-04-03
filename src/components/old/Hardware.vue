<!-- eslint-disable -->
<template>
<div>
   <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
     <template slot="items" slot-scope="props">
        <td></td>
        <td>{{ props.item.asset_tag }}</td>
        <td class="text-xs-right">{{ props.item.category.name }}</td>
        <td class="text-xs-right">{{ props.item.model }}</td>
        <td class="text-xs-right">{{ props.item.status_label }}</td>
        <td class="text-xs-right">{{ props.item.assigned_to }}</td>
        <td class="text-xs-right">{{ props.item.location.name }}</td>
        <td class="justify-center layout px-0">
          <v-btn  v-if="!props.item.assigned_to" icon class="mx-0" @click="checkOut(props.item, props.assigned_to)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
            <v-btn  v-if="props.item.assigned_to" icon class="mx-0" @click="checkIn(props.item, props.item.assigned_to)">
            <v-icon color="red">edit</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary">Reset</v-btn>
      </template>
    </v-data-table>
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
    headers: [
      {
        text: 'id',
        value: 'id',
        align: 'left'
      },
      {
        text: 'Asset',
        value: 'asset_tag',
        align: 'left'
      },
      {
        text: 'Model',
        align: 'left',
        value: 'model'
      },
      {
        text: 'Category',
        align: 'left',
        value: 'category'
      },
      {
        text: 'Assigned To',
        align: 'left',
        value: 'assigned_to'
      },
      {
        text: 'Location',
        align: 'left',
        value: 'location'
      },
      {
        text: 'Actions',
        sortable: false,
        value: 'name'
      }
    ],
    items: []
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
    checkIn(assetId, assigned_to) {
      if (!assigned_to) {
        console.log('not gonna hapn capnxxx')
        return
      }
      this.$api
        .post('snipeit/hardware/checkin', { assigned_asset: assetId })
        .then(response => {
          console.log(response)
          this.selected = null
          // this.$router.go(this.$router.currentRoute)
        })
        .catch(e => {
          console.log(e)
        })
    },
    checkOut(assetId, assigned_to) {
      if (assigned_to) {
        console.log('not gonna hapn capn')
        return
      }

      this.$api
        .post('snipeit/hardware/checkout', {
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
      this.$api
        .get('snipeit/hardware')
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
          }
          console.log(data.rows)
          // then we update the rows with the fetched ones
          this.items = data.rows

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
