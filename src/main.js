// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'

import router from './router/index'

Vue.use(VueResource)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
