<template>
  <div class="search">

    <Nav @keywordSend="keywordSave"></Nav>
    <!-- SEARCH -->
    <div class="container-fluid">
        <div class="text-center d-flex flex-column align-items-center mt-4">
          <form id="searchForm" class="w-50" method="POST">
            <!-- 防止發送 -->
            <input type="text" name="keyword" class="form-control" v-model.trim="keyword" placeholder="Please enter the text you want to search" @keydown.enter.prevent="searchForm" >
          </form>
          <div class="text-left w-50 pl-2 text-secondary">
            {{ results }} results found
          </div>
        </div>
        <h1 v-if="keyword" class="text-center keyword">Results for "{{ keyword }}"</h1>
        <h4 v-else class="text-center text-danger mt-2 keyword">Please enter the text you want to search</h4>
        <div class="filter row px-2">
          <!-- filter btn -->
          <div class="col-4 col-md-2 ml-auto"> <!-- select -->
              <select class="form-control"  v-model="filter" @change="itenFilter">
              <option value="">SORT BY</option>
              <option value="toH">Price (Lowest to Highest)</option>
              <option value="toL">Price (Highest to Lowest)</option>
              <option value="toZ">Name (from A to Z)</option>
              <option value="toA">Name (from Z to A)</option>
              </select>
          </div>
        </div>
        <div class="main mt-3">
          <div class="row">
            <div class="col-12 px-4">
              <div class="row row-cols-1 row-cols-sm-3" id="searchArea">
                <!-- search items -->
                <div class="col text-left" v-for="(item, index) in data" :key="index">
                  <router-link :to="`/products/${item.tableName.toLowerCase()}/${item.title.toLowerCase().split(' ').join('-')}`" class="text-reset text-decoration-none itemCard" @mouseenter.native="imgAction = index" @mouseleave.native="imgAction = -1">
                    <img v-if="imgAction !== index" :src="`images/${item.tableName}/${item.img1}`" width="100%" :alt="item.title">
                    <img v-else-if="imgAction === index" :src="`images/${item.tableName}/${item.img2}`" width="100%" :alt="item.title">
                    <div class="titleItem">{{ item.title }}</div>
                    <div class="tagItem text-secondary"><span class="border-bottom">{{ item.tag }}</span></div>
                    <div class="priceItem text-secondary"><span class="">NT$ {{ item.sales_price }}</span></div>
                  </router-link>
                  <div class="colorItem">
                  <ul style="padding-inline-start:0" class="d-flex">
                    <li><div class="colorSpace mt-2 mr-2"><div class="BLACK"></div></div></li>
                    <li><div class="colorSpace mt-2 mr-2"><div class="RED"></div></div></li>
                    <li><div class="colorSpace mt-2 mr-2"><div class="BLUE"></div></div></li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- COMPONENTS -->
    <EventMail></EventMail>
    <Footer></Footer>

  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import EventMail from '../components/EventMail.vue'
import mysql from '../admin/mysql.js'

export default {
  name: 'Search',
  data: () => ({
    data: [],
    imgAction: -1,
    filter: '',
    keyword: ''
  }),
  computed: {
    results () {
      if (this.data === []) return 0
      return this.data.length
    },
    keyword_state () {
      return this.$store.state.search.keyword
    }
  },
  watch: {
    keyword (newword) {
      if (!newword) {
        this.$store.commit('SET_KEYWORD', this.keyword)
        this.data = this.$options.data().data
        return false
      }
      this.$store.commit('SET_KEYWORD', this.keyword)
      this.$nextTick(() => {
        this.searchForm()
      })
    },
    keyword_state (newtext) {
      this.keyword = newtext
    }
  },
  created () {
    window.scrollTo(0, 0)
    const text = this.$store.state.search.keyword
    this.keyword = text
  },
  mounted () {
  },
  updated () {
  },
  methods: {
    searchForm () {
      const data = document.querySelector('#searchForm')
      mysql.post('search_table', new FormData(data)).then((res) => {
        this.data = res
      })
    },
    itenFilter (e) {
      switch (e.target.value) {
        case 'toH':
          this.data = this.data.sort((a, b) => a.sales_price - b.sales_price)
          break
        case 'toL':
          this.data = this.data.sort((a, b) => b.sales_price - a.sales_price)
          break
        case 'toZ':
          this.data = this.data.sort((a, b) => {
            const vala = a.title.toUpperCase()
            const valb = b.title.toUpperCase()
            if (vala > valb) return 1
            else return -1
          })
          break
        case 'toA':
          this.data = this.data.sort((a, b) => {
            const vala = a.title.toUpperCase()
            const valb = b.title.toUpperCase()
            if (vala < valb) return 1
            else return -1
          })
          break
        default:
          break
      }
    },
    keywordSave (text) {
      this.keyword = text
    }
  },
  components: {
    Nav,
    Footer,
    EventMail
  }
}
</script>

<style>
.search{
  margin-top: 100px;
}
ul, li{
  list-style: none;
}
.colorSpace{
  position: relative;
  width:30px;
  height:30px;
  background-color: #fff;
  border-radius: 50%;
  padding: 4px;
  border:1px solid #ddd;
}
.colorSpace:hover{
  border:1px solid #aaa;
}
.BLACK{
  background-color: #333;
  width: 20px;
  height:20px;
  border-radius: 50%;
}
.RED{
  background-color: #f00;
  width: 20px;
  height:20px;
  border-radius: 50%;
}
.BLUE{
  background-color: #005AB5;
  width: 20px;
  height:20px;
  border-radius: 50%;
}
</style>
