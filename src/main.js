// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import timepicker from './components/timepicker.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<timepicker hours="HH" minutes="MM" seconds="SS"/>',
  components: { timepicker }
})
