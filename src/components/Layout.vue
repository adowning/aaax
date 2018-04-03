<template>

  <v-app id="inspire">
   <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
   <link href='https://unpkg.com/quasar-framework@0.15.10/dist/umd/quasar.mat.min.css' rel="stylesheet">
    <v-navigation-drawer
      fixed
      floating
      enable-resize-watcher
      disable-route-watcher
      persistent
      :mini-variant.sync="mini"
      v-model="drawer"
      v-if="user"
      app>
      <v-list class="main-list">
        <v-list-tile
              avatar
              ripple
            >
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              {{user.name}}
              </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action icon>
            <v-btn icon light @click.stop="mini = !mini">
              <v-icon light>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>

        </v-list-tile>
      </v-list>
      <div v-show="!mini">
          <div v-if="!user.currentTimeSheet>
            <v-btn outline small>Clock In</v-btn>
            <v-btn flat small> xNot Clocked In</v-btn>
             </div>
          </div>

 <v-divider></v-divider>



          <template>
             <v-list class="pt-0" dense>
          <v-list-tile icon >
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content >
          <v-list-tile-title>Dash Boards</v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>
      <div v-show="!mini">
     <v-list>
       <v-list-tile to="liveview">
            <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
      <v-list-tile-content >Live View</v-list-tile-content>
     </v-list-tile>
     <v-list-tile to="schedule">
            <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
      <v-list-tile-content >Schedule</v-list-tile-content>
     </v-list-tile>
     </v-list>
      </div>
      <v-list-tile icon >
        <v-list-tile-action>
          <v-icon>devices_other</v-icon>
        </v-list-tile-action>
        <v-list-tile-content >
          <v-list-tile-title>Assets</v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>
      <div v-show="!mini">
     <v-list>
       <v-list-tile to="hardware">
            <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
      <v-list-tile-content >Tools</v-list-tile-content>
     </v-list-tile>
     <v-list-tile to="consumables">
            <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
      <v-list-tile-content >Consumables</v-list-tile-content>
     </v-list-tile>
     </v-list>
      </div>

            <v-list-tile icon >
        <v-list-tile-action>
          <v-icon>people</v-icon>
        </v-list-tile-action>
        <v-list-tile-content >
          <v-list-tile-title>Employees</v-list-tile-title>
        </v-list-tile-content>

      </v-list-tile>
      <div v-show="!mini">
     <v-list>
       <v-list-tile to="directory">
            <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
      <v-list-tile-content >Directory</v-list-tile-content>
     </v-list-tile>
     <v-list-tile to="profile">
            <v-list-tile-action>
          <v-icon></v-icon>
        </v-list-tile-action>
      <v-list-tile-content >Profile</v-list-tile-content>
     </v-list-tile>
     </v-list>
      </div>
    </v-list>
          </template>

    </v-navigation-drawer>
    <!-- <v-toolbar app fixed>
      <v-toolbar-title>{{name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn icon="icon" slot="activator" light>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-menu>
    </v-toolbar> -->
    <v-content app clipped-left>
        <router-view v-if="user"></router-view>
    </v-content>
    <v-footer  app absolute>
      <span>&copy; 2017</span>
    </v-footer>
    <!-- <v-snackbar
      :timeout="3000"
      :bottom="true"
      :right="true"
      :multi-line="true"
      :color="snackbarColor"
      v-model="snackbar">
      {{ $store.state.notification.text }}
      <v-btn dark flat @click="snackbar = false">Close</v-btn>
    </v-snackbar> -->
  </v-app>
</template>
    <!--<script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script>
      <script src="https://www.gstatic.com/firebasejs/4.11.0/firebase-firestore.js"></script>-->


<script>
import Vuetify from 'vuetify'
import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import fbApp from '../plugins/firebase'
require('../../static/quasar')
/* eslint-disable */
// $primary = #4c566a;
// $secondary   = #81a1c1
// $tertiary  = #8fbcbb

// $neutral   = #E0E1E2
// $positive  = #88c0d0
// $negative  = #DB2828
// $info      = #31CCEC
// $warning   = #F2C037

// $body-background	= #2e3440
// $body-color = #d8dee9
// $table-hover-background	= #3b4252
// $item-highlight-color	= #434c5e
// $item-selected-color	= #434c5e

Vue.use(Vuetify, {
  theme: {
    primary: '#4c566a',
    secondary: '#81a1c1',
    accent: '#8fbcbb',
    error: '#DB2828',
    info: '#31CCEC',
    success: '#88c0d0',
    warning: '#F2C037'
  }
})

// Vue.use(Vuetify, {
//   theme: {
//     primary: '#1976D2',
//     secondary: '#424242',
//     accent: '#82B1FF',
//     error: '#FF5252',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FFC107'
//   }
// })
Vue.use('Quasar')
// console.log(fbApp)
export default {
  props: {
    source: String
  },
  data() {
    return {
      drawer: true,
      items: [
        {
          click: 'person',
          icon: 'person',
          title: 'Something'
        },
        {
          icon: 'person',
          title: 'Settings'
        }
      ],
      name: 'Andrews',
      mini: true,
      right: null
    }
  },
  methods: {
    goaway() {
      console.log('asdf')
    }
  },
  computed: {
    // snackbar: {
    //   get() {
    //     return this.$store.state.notification.snackbar
    //   },
    //   set(value) {
    //     this.$store.commit('notification/UPDATE_SNACKBAR', value)
    //   }
    // },
    user() {
      return this.$store.getters.user
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    },
    snackbarColor() {
      // return this.$store.state.notification.context
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        console.log(value)

        this.$router.push('/')
      }
    }
  },
  mounted() {
    var defaultStorage = fbApp.storage()
  }
}
</script>
<style lang='stylus' >
$theme = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
};

// Main transition effect.
.page-enter-active, .page-leave-active {
  transition: opacity 0.25s;
}

.page-enter, .page-leave-active {
  opacity: 0;
}

// Paginate transition effect.
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>
