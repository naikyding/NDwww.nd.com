import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus, faFacebookSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { BootstrapVue, BIcon, BIconArrowUp, BIconArrowDown, BIconSearch, BIcondash, BIconBag, BIconGeoAlt, BIconPerson, BIconDash, BIconPlus, BIconXCircleFill } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)
Vue.component('BIconSearch', BIconSearch)
Vue.component('BIconBag', BIconBag)
Vue.component('BIconGeoAlt', BIconGeoAlt)
Vue.component('BIconPerson', BIconPerson)
Vue.component('BIconDash', BIconDash)
Vue.component('BIconPlus', BIconPlus)
Vue.component('BIconXCircleFill', BIconXCircleFill)
Vue.component('BIcondash', BIcondash)

library.add(faCoffee, faFacebookSquare, faGooglePlus, faInstagram, faTwitter, faYoutube)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    // Get localStorage -> OrderCart List
    this.$store.dispatch('ORDER_CART_LIST_GET')
  },
  render: h => h(App)
}).$mount('#app')
