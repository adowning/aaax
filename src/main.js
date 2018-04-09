// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router.js'
import AxiosPlugin from './plugins/axios.js'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import Amplify, { Auth, Logger } from 'aws-amplify'
// import awsExports from '../awsmobilejs/#current-backend-info/aws_exports'
import awsExports from './aws-exports.js'
Amplify.configure(awsExports)
Amplify.Logger.LOG_LEVEL = 'DEBUG' // to show detailed logs from Amplify library

const logger = new Logger('main')

// Auth.currentUserInfo()
//   .then(user => logger.debug(user))
//   .catch(err => logger.debug(err))
Vue.use(store)
Vue.use(AxiosPlugin)

Vue.use(Vuetify, {
  theme: {
    // primary: '#512DA8',
    // secondary: '#D1C4E9',
    // accent: '#FFC107',
    // error: '#f44336',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FFC107'

    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  options: { themeVariations: ['primary', 'secondary'] }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
