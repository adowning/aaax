const awsmobile = {
  aws_app_analytics: 'enable',
  aws_cloud_logic: 'enable',
  aws_cloud_logic_custom: [
    {
      id: 'xp7ge8x400',
      name: 'andrewsadmin-tracks',
      description: '',
      endpoint: 'https://xp7ge8x400.execute-api.us-east-1.amazonaws.com/Development',
      region: 'us-east-1',
      paths: ['/tracks', '/tracks/123']
    }
  ],
  aws_cognito_identity_pool_id: 'us-east-1:5cb534d2-8cac-405e-91a2-c02c8d9f6c35',
  aws_cognito_region: 'us-east-1',
  aws_content_delivery: 'enable',
  aws_content_delivery_bucket: 'andrewsadmin-hosting-mobilehub-534230033',
  aws_content_delivery_bucket_region: 'us-east-1',
  aws_content_delivery_cloudfront: 'enable',
  aws_content_delivery_cloudfront_domain: 'd2cv73tr4jdpsv.cloudfront.net',
  aws_dynamodb: 'enable',
  aws_dynamodb_all_tables_region: 'us-east-1',
  aws_dynamodb_table_schemas: [
    {
      tableName: 'andrewsadmin-mobilehub-534230033-Locations',
      attributes: [
        { name: 'userId', type: 'S' },
        { name: 'itemId', type: 'S' },
        { name: 'category', type: 'S' },
        { name: 'latitude', type: 'N' },
        { name: 'longitude', type: 'N' },
        { name: 'name', type: 'S' }
      ],
      indexes: [{ indexName: 'Categories', hashKey: 'category', rangeKey: 'longitude' }],
      region: 'us-east-1',
      hashKey: 'userId',
      rangeKey: 'itemId'
    }
  ],
  aws_mandatory_sign_in: 'enable',
  aws_mobile_analytics_app_id: 'db23866e3dbe4e189c30aa153134c914',
  aws_mobile_analytics_app_region: 'us-east-1',
  aws_project_id: '298b0116-bebe-4939-86a7-0ba4425e000d',
  aws_project_name: 'andrewsadmin',
  aws_project_region: 'us-east-1',
  aws_resource_bucket_name: 'andrewsadmin-deployments-mobilehub-534230033',
  aws_resource_name_prefix: 'andrewsadmin-mobilehub-534230033',
  aws_sign_in_enabled: 'enable',
  aws_user_files: 'enable',
  aws_user_files_s3_bucket: 'andrewsadmin-userfiles-mobilehub-534230033',
  aws_user_files_s3_bucket_region: 'us-east-1',
  aws_user_pools: 'enable',
  aws_user_pools_id: 'us-east-1_YAIoqapmK',
  aws_user_pools_mfa_type: 'ON',
  aws_user_pools_web_client_id: 'p9shu4qbqaksmpg26lel2eifh',
  aws_user_settings: 'enable'
}

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
// import awsExports from 'aws-exports.js'
Amplify.configure(awsmodule)
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
