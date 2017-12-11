// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

var VueResource = require('vue-resource');
Vue.use(VueResource);



/* eslint-disable no-new */
var main= new Vue({
  el: '#app',
  store,
  router,
  
  template: '<App/>',
  components: { App },
  data:{
    name: 'sada'
  }
})
