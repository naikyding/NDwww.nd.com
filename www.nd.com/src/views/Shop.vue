<template>
  <div class="shop">
    <Nav></Nav>
    <!-- content -->
    <div class="container-fluid shop-main">
      <div id="breadcrumbs" style="font-size: .5rem;" class="text-secondary mt-3 text-left">
        <router-link class="text-secondary text-decoration-none" to="/">HOME</router-link>
        / <span >{{ $route.name.toUpperCase() }} </span>
        <span class="d-none"></span> / <span>{{ $route.params.sex.toUpperCase() }}</span>
      </div>
      <h1 class="text-center mt-3">{{ $route.params.sex.toUpperCase() }} SHOP ALL</h1>
      <div class="filter row"> <!-- filter btn -->
        <div class="col-4 col-md-2 ">
          <button class="btn ">
          <img src="" alt="">
          </button>
        </div>
        <div class="col-4 col-md-2 ml-auto"> <!-- select -->
          <select class="form-control" v-model="filter" @change="itenFilter">
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
          <div class="filterMenu col-3 d-none d-md-block" style="background-color: #eee;"> <!-- left -->

          </div>
          <div class="col-12 col-md-9 px-4"> <!-- right -->
            <div class="row row-cols-3" id="searchArea">

              <div class="col" v-for="(item, index) in data.items" :key="index">
                <router-link :to="'/products/'+$route.params.sex+'/'+item.title.toLowerCase().split(' ').join('-')" class="text-reset text-decoration-none itemCard" @mouseenter="imgChange(index)" @mouseleave="imgChange(-1)">
                  <img v-if="imgAction !== index" :src="require('../assets/img/'+data.tableName.toUpperCase()+'/'+item.img1)" width="100%" :alt="item.title" >
                  <img v-else-if="imgAction === index" :src="require('../assets/img/'+data.tableName.toUpperCase()+'/'+item.img2)" width="100%" :alt="item.title" >
                  <div class="titleItem ">{{ item.title }}</div>
                  <div class="tagItem text-secondary"><span class="border-bottom">{{ item.tag }}</span></div>
                  <div class="priceItem text-secondary"><span  class="">NT$ </span><span >{{ item.price }}</span></div>
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
  <EventMail></EventMail>
  <Footer></Footer>

  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import EventMail from '@/components/EventMail.vue'

export default {
  name: 'Shop',
  data: () => ({
    data: [],
    imgAction: -1,
    filter: '',
    tableName: ''
  }),
  computed: {
    productTable () {
      return this.$route.params.sex
    }
  },
  watch: {
    productTable (newParams) {
      window.scrollTo(0, 0)
      const tableName = newParams.toUpperCase()
      this.axios.get(`http://localhost/VueProject/api/api.php?do=selectTable&table=${tableName}`).then((res) => {
        if (!res.data) return this.$router.replace({ path: '/' })
        const resDate = () => ({
          tableName: this.productTable,
          items: res.data
        })
        this.data = resDate()
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    // const tableName = this.$route.params.sex.toUpperCase()
    // this.axios.get(`http://localhost/VueProject/api/api.php?do=selectTable&table=${this.productTable.toUpperCase()}`).then((res) => {
    this.axios.get(`api/api.php?do=selectTable&table=${this.productTable.toUpperCase()}`).then((res) => {
      if (!res.data) return this.$router.replace({ path: '/' })
      const resDate = () => ({
        tableName: this.productTable,
        items: res.data
      })
      this.data = resDate()
    })
  },
  components: {
    Nav,
    EventMail,
    Footer
  },
  methods: {
    imgChange (index) {
      this.imgAction = index
    },
    itenFilter (e) {
      switch (e.target.value) {
        case 'toH':
          this.data.items = this.data.items.sort((a, b) => a.price - b.price)
          break
        case 'toL':
          this.data.items = this.data.items.sort((a, b) => b.price - a.price)
          break
        case 'toZ':
          this.data.items = this.data.items.sort((a, b) => {
            const vala = a.title.toUpperCase()
            const valb = b.title.toUpperCase()
            if (vala > valb) return 1
            else return -1
          })
          break
        case 'toA':
          this.data.items = this.data.items.sort((a, b) => {
            const vala = a.title.toUpperCase()
            const valb = b.title.toUpperCase()
            if (vala < valb) return 1
            else return -1
          })
          break
        default:
          break
      }
    }
  }
}
</script>

<style  scoped>
div.shop-main{
  margin-top: 100px
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
ul{
  list-style: none;
}
</style>
