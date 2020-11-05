import Vue from 'vue';
import './plugins/composition-api'
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import AppShell from '@/components/AppShell/AppShell';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(AppShell)
}).$mount('#app');
