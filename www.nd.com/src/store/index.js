import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import storage from '../storage/index.js'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  strict: true,
  state: {
    slide: [],
    orderCart: [],
    errorText: ''
  },
  mutations: {
    SLIDE_SELECT_SET (state, data) {
      state.slide = data
    },
    ORDER_CART_LIST_SET (state, data) {
      state.orderCart = data
    },
    overStock (state, data) {
      state.errorText = data
    },
    orderCartReset (state) {
      state.orderCart = []
    }
  },
  actions: {
    SLIDE_SELECT (context) {
      axios.get('http://localhost/Github/ND_Vue/api/api.php?do=slide').then((res) => {
      // axios.get('api/api.php?do=slide').then((res) => {
        context.commit('SLIDE_SELECT_SET', res.data)
      })
    },
    ORDER_CART_LIST_GET (context) {
      const localData = storage.get('orderCart')
      if (localData === null) context.commit('orderCartReset')
      context.commit('ORDER_CART_LIST_SET', localData)
    },
    SET_ORDER_CART_LIST (context, data) {
      // // SET localStorage
      const localCartData = storage.get('orderCart')
      if (localCartData === null) {
        storage.set('orderCart', [data.list])
      } else {
        const sameItem = localCartData.filter(item => item.id === data.list.id && item.color === data.list.color && item.size === data.list.size && item.table === data.list.table)
        if (sameItem[0]) {
          sameItem[0].num = sameItem[0].num + data.list.num
          if (sameItem[0].num > data.inStock) {
            context.commit('overStock', '超過庫存量!!')
            return false
          }
          storage.set('orderCart', localCartData)
        } else {
          localCartData.push(data.list)
          storage.set('orderCart', localCartData)
        }
      }
    },
    REMOVE_ORDER_CART_ITEM (context, index) {
      storage.removeItem('orderCart', index)
    }
  },
  modules: {
  }
})
