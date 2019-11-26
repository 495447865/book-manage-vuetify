import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';

import bookManageService from './service';

Vue.config.productionTip = false;
Vue.prototype.bookManageService = bookManageService;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
