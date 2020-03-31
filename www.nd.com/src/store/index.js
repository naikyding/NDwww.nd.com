import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    slide: []
  },
  mutations: {
    SLIDE_SELECT_SET (state, data) {
      state.slide = data
    }
  },
  actions: {
    SLIDE_SELECT (context) {
      // axios.get('http://localhost/VueProject/api/api.php?do=slide').then((res) => {
      axios.get('api/api.php?do=slide').then((res) => {
        context.commit('SLIDE_SELECT_SET', res.data)
      })
    }
  },
  modules: {
  }
})
