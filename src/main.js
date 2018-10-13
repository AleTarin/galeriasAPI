// Base
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

import '@babel/polyfill'

// Plugins
import './plugins/bootstrap-vue'

Vue.config.productionTip = false

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: 'AIzaSyARmcC7xw0cXKIEGswNKjFlPRLtj7AiyO4',
  authDomain: 'galerias-api.firebaseapp.com',
  databaseURL: 'https://galerias-api.firebaseio.com',
  projectId: 'galerias-api',
  storageBucket: 'galerias-api.appspot.com',
  messagingSenderId: '602754063471'
})
const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)
export const db = firestore

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
