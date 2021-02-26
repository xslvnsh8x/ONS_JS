import Vue from 'vue';
import 'normalize.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faCheckSquare, faEdit, faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
