import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const mysql = {
  url: '/api/Github/ND_Vue/api/api.php?do=',
  get (doItem) {
    return axios.get(this.url + doItem).then((res) => {
      return res.data
    })
  },
  post (toItem, data) {
    if (!data) return false
    return axios.post(this.url + toItem, data).then((res) => {
      return res.data
    })
  },
  patch (toItem, data) {
    if (!data) return false
    return axios.post(this.url + toItem, data).then((res) => {
      return res.data
    })
  },
  delete (toItem, id) {
    if (!id) return false
    return axios.post(this.url + toItem, JSON.stringify(id)).then((res) => {
      return res.data
    // console.log(res.data)
    })
  }
}

export default mysql
