'use strict';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Download eBook Now'
  },
  methods: {
    showMessage: function () {
      this.message = 'Hello from Li :)'
    }
  }
})