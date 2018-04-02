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
         <v-flex xs12  >

    <v-btn outline small>Clock In</v-btn>
               <v-chip small label outline color="red">Not clocked in</v-chip>
    
    <!-- <v-btn color="primary" small >Error</v-btn> -->
         </v-flex>
      </v-list>
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
      <!-- <v-list>
        <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
          <v-list-tile slot="item" :ripple="!item.items" :router="!item.items" :to="item.to ? item.to : ''">
            <v-list-tile-action icon light>
               <v-icon icon light>person</v-icon> 
              <v-icon light>person</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>person</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.items">
              <v-icon light>person</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" ripple>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list> -->
    </v-navigation-drawer>
    <v-toolbar app fixed>
      <!-- <v-toolbar-side-icon v-if="user" light @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-toolbar-title>{{name}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu bottom left>
        <v-btn icon="icon" slot="activator" light>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-menu>
    </v-toolbar>
    <v-content app clipped-left>
      <!-- <v-container fluid fill-height> -->
        <!-- <v-layout>
          <nuxt></nuxt>
        </v-layout> -->
        <router-view v-if="user"></router-view>
      <!-- </v-container> -->
    </v-content>
    <v-footer light app>
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
Vue.use(Vuetify)
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
    console.log(this)
    var defaultStorage = fbApp.storage()
    console.log(defaultStorage)
  }
}
</script>
<style lang='stylus' >
$theme ?= {
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