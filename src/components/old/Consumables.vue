<template>
 <div>
    <!-- <v-dialog v-model="dialog" max-width="500px">
      <v-btn color="primary" dark slot="activator" class="mb-2">New Item</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text> -->
          <!-- <v-container grid-list-md>
            <v-layout wrap>
             <v-flex xs12 sm6 md4>
              <v-text-field label="Dessert name" v-model="editedItem.name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Calories" v-model="editedItem.calories"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Fat (g)" v-model="editedItem.fat"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Carbs (g)" v-model="editedItem.carbs"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Protein (g)" v-model="editedItem.protein"></v-text-field>
              </v-flex>
              <v-flex>
               <q-td key="id" :props="props"></q-td>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Category Name" v-model="editedItem.name"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Qty" v-model="editedItem.calories"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Remaining" v-model="editedItem.fat"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Min Amt" v-model="editedItem.carbs"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Location" v-model="editedItem.protein"></v-text-field>
              </v-flex>
               <v-flex xs12 sm6 md4>
                <v-text-field label="Assigned to" v-model="editedItem.protein"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container> -->
        <!-- </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
    <v-data-table
      :headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
     <template slot="items" slot-scope="props">
       <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.category.name }}</td>
        <td class="text-xs-right">{{ props.item.qty }}</td>
        <td class="text-xs-right">{{ props.item.remaining }}</td>
        <td class="text-xs-right">{{ props.item.min_amt }}</td>
        <td class="text-xs-right">{{ props.item.location.name }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon color="teal">edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="takeItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
  <!-- <q-table
    title="Consumables"
    :data="serverData"
    :columns="columns"
        :loading="loading"

  >
   <q-tr slot="body" slot-scope="props" :props="props">

        <q-td key="id" :props="props"></q-td>
        <q-td key="category" :props="props">{{ props.row.category.name }}</q-td>
       <q-td key="qty" :props="props">{{ props.row.qty }}</q-td>
        <q-td key="remaining" :props="props">{{ props.row.remaining }}</q-td>
        <q-td key="min_amt" :props="props">{{ props.row.min_amt }}</q-td>
        <q-td key="location" :props="props">{{ props.row.location.name }}</q-td>
            <q-btn v-if="!props.row.assigned_to" size="sm"  small square color="amber" @click="checkOut(props.row.id, props.row.available_actions, props.row.assigned_to)" class="q-mr-xs" >Check Out</q-btn>

   </q-tr>
  </q-table> -->
</template>

<script>
export default {
  data: () => ({
    loading: false,
    serverPagination: {
      page: 1
    },
    dialog: false,
    // headers: [
    //   {
    //     text: 'Dessert (100g serving)',
    //     align: 'left',
    //     sortable: false,
    //     value: 'name'
    //   },
    //   { text: 'Calories', value: 'calories' },
    //   { text: 'Fat (g)', value: 'fat' },
    //   { text: 'Carbs (g)', value: 'carbs' },
    //   { text: 'Protein (g)', value: 'protein' },
    //   { text: 'Actions', value: 'name', sortable: false }
    // ],
    // items: [],
    // editedIndex: -1,
    // editedItem: {
    //   name: '',
    //   calories: 0,
    //   fat: 0,
    //   carbs: 0,
    //   protein: 0
    // },
    // defaultItem: {
    //   name: '',
    //   calories: 0,
    //   fat: 0,
    //   carbs: 0,
    //   protein: 0
    // },
    headers: [
      {
        text: 'name',
        value: 'id',
        align: 'left',
        sortable: false
        // visible: false
      },
      {
        text: 'Category',
        // name: 'category',
        align: 'left',
        value: 'category'
      },
      {
        text: 'Order to',
        // name: 'qty',
        align: 'left',
        value: 'qty'
      },
      {
        text: 'Remaining',
        // name: 'remaining',
        value: 'remaining'
      },
      {
        text: 'Minimum',
        // name: 'min_amt',
        value: 'min_amt'
      },
      {
        text: 'Location',
        // name: 'location',
        value: 'location'
      },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    items: []
  }),
  methods: {
    initialize() {
      // this.items = [
      //   {
      //     name: 'Frozen Yogurt',
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0
      //   },
      //   {
      //     name: 'Ice cream sandwich',
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3
      //   },
      //   {
      //     name: 'Eclair',
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0
      //   }
      // ]
    },
    // editItem(item) {
    //   this.editedIndex = this.items.indexOf(item)
    //   this.editedItem = Object.assign({}, item)
    //   this.dialog = true
    // },

    // deleteItem(item) {
    //   const index = this.items.indexOf(item)
    //   confirm('Are you sure you want to delete this item?') && this.items.splice(index, 1)
    // },

    // close() {
    //   this.dialog = false
    //   setTimeout(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem)
    //     this.editedIndex = -1
    //   }, 300)
    // },

    // save() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.items[this.editedIndex], this.editedItem)
    //   } else {
    //     this.items.push(this.editedItem)
    //   }
    //   this.close()
    // },
    checkOut(assetId) {
      // if (!actions.checkout || assigned_to) {
      //   console.log('not gonna hapn capn')
      //   return
      // }

      this.$api
        .post('snipeit/consumables/' + assetId + '/checkout', {
          assigned_user: this.user.id,
          assigned_asset: assetId
        })
        .then(response => {
          console.log(response)
          this.selected = null
          // this.$router.go(this.$router.currentRoute)
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
        .get('snipeit/consumables')
        .then(({ data }) => {
          console.log(data.rows)
          // this.serverPagination = pagination
          // this.serverPagination.rowsNumber = data.rowsNumber

          this.items = data.rows

          this.loading = false
        })
        .catch(error => {
          this.loading = false
        })
    }
  },
  computed: {
    // formTitle() {
    //   return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    // }
  },

  mounted() {
    // once mounted, we need to trigger the initial server data fetch
    this.request({
      pagination: this.serverPagination,
      filter: this.filter
    })
  },
  created() {
    // this.initialize()
  }
}
</script>
