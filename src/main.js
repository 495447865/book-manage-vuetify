import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import vuetify from './plugins/vuetify';

import './styles/vuetify-extended.css';

import AppService from './service';

Vue.config.productionTip = false;
Vue.prototype.appService = AppService;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
