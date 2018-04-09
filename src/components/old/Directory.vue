
<template>
<div>
  <v-layout row>
    <v-flex xs12 sm9 offset-sm1>
      <v-card>
        <v-toolbar flat>
          <v-btn icon>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <!-- <v-toolbar-title>Albums</v-toolbar-title> -->
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>
        <v-subheader>Employees</v-subheader>
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex xs4 v-for="employee in employees" :key="employee.id" >
              <v-card>
                <v-card-media
                  :src="employee.photoUrl"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="employee.full_name"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>phone</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-subheader>Applicants</v-subheader>
        <v-container fluid grid-list-sm>
        </v-container>
        <v-footer class="mt-5"></v-footer>
      </v-card>
    </v-flex>
  </v-layout>
    </div>
</template>

<script>
import fbApp from '../../plugins/firebase'
export default {
  name: 'Directory',
  data() {
    return {
      employeeDialog: false,
      employeeFormValid: true,
      newEmployee: {
        id: null,
        name: null,
        url: null
      },
      employees: [],
      servicesLoading: false,
      editOn: false
    }
  },
  methods: {
    listEmployees() {
      this.employeesLoading = true
      this.employees = []
      var defaultStore = fbApp.firestore()

      defaultStore
        .collection('employees')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              name: doc.data.cdl
            }
            // doc.data().photoUrl = '../statics/quasar-logo.png'
            this.employees.push(doc.data())
          })
        })
      this.employeesLoading = false
    },
    listEmployees2() {
      var params = {
        UserPoolId: 'STRING_VALUE' /* required */,
        AttributesToGet: [
          'STRING_VALUE'
          /* more items */
        ],
        Filter: 'STRING_VALUE',
        Limit: 0,
        PaginationToken: 'STRING_VALUE'
      }
      cognitoidentityserviceprovider.listUsers(params, function(err, data) {
        if (err)
          console.log(err, err.stack) // an error occurred
        else console.log(data) // successful response
      })
    }
  },
  created() {
    this.listEmployees()
  }
}
</script>

<style scoped>

</style>
