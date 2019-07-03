import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import axios from 'axios'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false


  // Your web app's Firebase configuration
  firebase.initializeApp({
    apiKey: xxxxxxx,
    authDomain: xxxxxxxxxxx ,
    databaseURL: xxxxxxxxxx,
    projectId: xxxxxxxxxxx,
    storageBucket: xxxxxxxxxxxx,
    messagingSenderId: xxxxxxxxxxxx,
    appId: xxxxxxxxxxxxx
  });
  // Initialize Firebase
 

  let app

  firebase.auth().onAuthStateChanged(() => {
    if (!app) {
      app = new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app')
    }
  })