import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const slide = {
  get () {
    return axios.get('/api/Github/ND_Vue/api/api.php?do=GET_slide').then((res) => {
      return res.data
    })
  },
  post () {

  },
  patch (data) {

  },
  delete (id) {
    if (!id) return false
    return axios.post('/api/Github/ND_Vue/api/api.php?do=DELETE_slide', id).then((res) => {
      return res.data
    })
  }
}

export default slide
