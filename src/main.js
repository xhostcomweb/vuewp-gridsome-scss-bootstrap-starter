import './index.js';
//Node Modules import
import BootstrapVue from 'bootstrap-vue'  
// Import global styles
import 'bootstrap-vue/dist/bootstrap-vue.css'//Node Module
import '~/assets/css/bootstrap.css';//Local css
import '~/assets/css/custom.css'  //Local css

import DefaultLayout from '~/layouts/Default.vue'
export default function (Vue,{ head, router, isServer } ) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
}
