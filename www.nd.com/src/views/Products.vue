<template>
  <div class="products">
    <Nav></Nav>
    <!-- main -->
    <div class="container-fluid px-4 mt100">
    <!-- breadcrumbs -->
    <div id="breadcrumbs" style="font-size: .5rem;" class="text-secondary my-3 text-left">
      <router-link to="/" >
        HOME
      </router-link>
      <span> / </span>
      <a >
        <span >PRODUCT</span>
      </a>
      <span> / </span>
      <router-link :to="'/shop/'+this.$route.params.table" >
        <span >{{ this.$route.params.table.toUpperCase() }}</span>
      </router-link>
      <span> / </span>
      <a >
        <span>{{ this.$route.params.name.toUpperCase().split('-').join(' ') }}</span>
      </a>
    </div>

    <!-- DETAILS -->
    <div class="product_details row">
      <div class="col-12 col-md-6 image_content ">
        <!-- carouse -->
        <b-carousel
          id="carousel"
          fade
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          class="position-sticky"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            v-for="(item, index) in data.img"
            :key="index"
          >
            <template v-slot:img class="position-sticky">
              <img
                class="d-block img-fluid "
                :src="`/images/${$route.params.table.toUpperCase()}/${item}`"
                :alt="slide.title"
              >
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <!-- TEXT -->
      <!-- Product txt -->
      <div class="col-12 col-md-6 txt_content overflow-auto px-5 text-left">
        <h1 class="productName">{{ data.title }}</h1>
        <div class="product_price">
          <span></span>
          <span class=" price_sales">NT$ </span>
          <span class="h4">{{ data.sales_price }}</span>
        </div>
        <div class="product_val">
            <!-- color -->
          <div class="product_color my-4">
            <ul class="" style="padding-inline-start: 0px;">
              <li ><span>COLOR:</span> <span class="text-secondary">BLACK</span></li>
              <input type="text" name="cartColor" hidden value="BLACK">
              <li><div class="color_black mt-2"><div class="BLACK"></div></div></li>
            </ul>
          </div>
          <!-- size -->
          <div class="product_size mt-4">
            <ul class="" style="padding-inline-start: 0px;">
              <li class="mt-2">
                <span>SIZE:</span>
                <span class="text-danger" v-if="selected.errTxt !== ''"> {{ selected.errTxt }}</span>
                <span class="text-secondary "> {{ orderCart.size }}</span>
              </li>
              <input name="size" type="text" class="cartSize" hidden>
              <li class="mt-2 d-flex">
                <div v-for="(item, index)  in data.size" :key="index">
                  <a v-if="item === 'XS' || item === 'S' || item === 'M' || item === 'L' || item === 'XL' || item === 'XXL'" class="mr-3 sizeSelectA" @click="sizeSelectEv">
                    <div class="size mr-2 text-center" :class="{'sizeSelect':item === orderCart.size}" >{{ item }}</div>
                  </a>
                </div>
              </li>
              <li>
                <!-- stock -->
                <span class="text-danger" v-if="overStockErtxt !== ''"> {{ overStockErtxt }}</span>
                <div class="product_stock" v-if="orderCart.size !== ''">
                  <span id="stockNum" style="color:#888">{{ inStockNum }}</span>
                </div>
              </li>
            </ul>
          </div>

          <div class="d-flex mt-2 mb-4">
            <div class="select_pic mr-3">
              <select name="carNum" class="" id="numSelect" v-model.number="orderCart.num">
                <option v-for="(item, index) in selectOption" :value="item" :key="index">{{ index+1 }}</option>
              </select>
            </div>
            <div class="addBag flex-grow-1">
              <input @click="addToBag" class="btn w-100 addBagBtn" type="button" value="ADD TO BAG">
            </div>
          </div>
          <div class="product_txt">
            <ul class="" style="padding-inline-start: 0px;">
              <li class="py-3 border-top border-bottom ">
                <div @click="textEv(1)" class="details d-flex align-items-center">
                  <span @click="textEv(1)"><b>DETAILS</b></span>
                  <p v-if="btnEv.details" class="ml-auto contentDisplay1 mb-0">
                    <b-icon class="h3 mb-0" icon="plus" ></b-icon>
                  </p>
                  <p v-else class="ml-auto contentDisplay1 mb-0">
                    <b-icon class="h3 mb-0" icon="dash" ></b-icon>
                  </p>
                </div>
                <div v-show="btnEv.details" @click="textEv(1)" class="contentDetails mt-2" style="color:#888">{{ data.details }}</div>
              </li >
              <li class="py-3 border-bottom ">
                <div  @click="textEv(2)" class="details d-flex">
                  <span><b>Care & Composition</b></span>
                  <p v-if="btnEv.care" class="ml-auto contentDisplay1 mb-0">
                    <b-icon class="h3 mb-0" icon="plus"></b-icon>
                  </p>
                  <p v-else class="ml-auto contentDisplay1 mb-0">
                    <b-icon class="h3 mb-0" icon="dash"></b-icon>
                  </p>
                </div>
                <div v-show="btnEv.care" @click="textEv(2)" class="content mt-2" style="color:#888">{{ data.care }}</div>
              </li>
              <li class="py-3 border-bottom ">
                <div @click="textEv(3)" class="details d-flex">
                  <span><b>Shipping and Returns</b></span>
                  <p v-if="btnEv.ship" class="ml-auto contentDisplay1 mb-0">
                    <b-icon class="h3 mb-0" icon="plus"></b-icon>
                  </p>
                  <p v-else class="ml-auto contentDisplay1 mb-0">
                    <b-icon class="h3 mb-0" icon="dash"></b-icon>
                  </p>
                </div>
                <div v-show="btnEv.ship" class="content mt-2" style="color:#888" @click="textEv(3)">
                  Style is eternal when it is a classic Western lean shirt from Calvin Klein Jeans. A genuinely timeless piece, it features a contemporary pointed collar, buttoned cuffs, signature logo-engraved snap buttons down the front and a curved hem. The contrastive panels add depth to your outfit.
                </div>
              </li>
            </ul>
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
import EventMail from '@/components/EventMail.vue'
import Footer from '@/components/Footer.vue'
import mysql from '../admin/mysql.js'
// import storage from '../storage/index.js'

export default {
  name: 'Products',
  data: () => ({
    data: [],
    slide: 0,
    sliding: null,
    btnEv: {
      details: true,
      care: false,
      ship: false
    },
    selected: {
      errTxt: '',
      inStock: 1
    },
    orderCart: {
      id: '',
      table: '',
      size: '',
      num: 1,
      color: 'BLACK',
      img: '',
      title: '',
      price: 0
    }
  }),
  components: {
    Nav,
    EventMail,
    Footer
  },
  computed: {
    orderCart_state () {
      return this.$store.state.orderCart
    },
    inStockNum () {
      return this.selected.inStock > 5 ? 'IN STOCK' : `ONLY ${this.selected.inStock} LEFT IN STOCK`
    },
    selectOption () {
      return this.selected.inStock > 5 ? 5 : this.selected.inStock
    },
    overStockErtxt () {
      return this.$store.state.errorText
    }
  },
  watch: {
    'orderCart.size' (val) {
      if (val === '') return false
      this.selected.inStock = Number(this.data.size[`${this.orderCart.size}num`])
    }
  },
  created () {
    window.scrollTo(0, 0)
    const { table, name } = this.$route.params
    mysql.get(`productsSelect&table=${table.toUpperCase()}&title=${name.split('-').join(' ')}`).then((res) => {
      if (!res) return this.$router.replace({ path: '/' })
      this.data = res
    })
  },
  mounted () {
    this.$store.commit('overStock', '')
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    textEv (num) {
      switch (num) {
        case 1:
          this.btnEv.details = !this.btnEv.details
          break
        case 2:
          this.btnEv.care = !this.btnEv.care
          break
        case 3:
          this.btnEv.ship = !this.btnEv.ship
          break

        default:
          break
      }
    },
    sizeSelectEv (e) {
      this.orderCart.size = e.target.innerText
      this.selected.errTxt = ''
      this.orderCart.id = Number(this.data.id)
      this.orderCart.table = this.$route.params.table.toUpperCase()
      this.orderCart.img = this.data.img.img1
      this.orderCart.title = this.$route.params.name.toUpperCase().split('-').join(' ')
      this.orderCart.price = Number(this.data.sales_price)
      this.$store.commit('overStock', '')
    },
    addToBag () {
      if (this.orderCart.size === '') {
        this.selected.errTxt = '請選擇尺吋!!'
        return false
      } else {
        const data = {
          list: this.orderCart,
          inStock: this.selected.inStock
        }
        this.$store.dispatch('SET_ORDER_CART_LIST', data).then(() => {
          this.orderCart = this.$options.data().orderCart
          this.selected = this.$options.data().selected
          if (this.overStockErtxt !== '') return false
          this.$store.dispatch('ORDER_CART_LIST_GET')
        })
      }
    },
    orderListDsp () {
    }
  }
}
</script>

<style scoped>
.details{
  cursor: pointer;
}
ul{
  list-style: none;
}
#breadcrumbs a{
  color: #6c757d;
}
select{
  width:7rem;
  height: 3rem;
  border: 1px solid #ddd;
  background-color: #fff;
  /* -webkit-appearance: none; */
  padding: 0 0 0 3rem; /* SAFARI */
  cursor: pointer;
  text-align-last: center;
}
.select_pic{
  position: relative;
}
.select_pic::before{
  content: "QTY";
  position: absolute;
  font-size: .4rem;
  top:32%;
  left:5px;
}

option{
  text-align:center;
  text-align-last:center;
}
img.d-block{
  width:100%;
  height:100%;
  object-fit:cover;
object-position: 50% 0px;
}
.addBagBtn{
  background-color: #C79C57;
  border:1px solid #C79C57;
  color:#fff;
  height:3rem;
  border-radius:2px;
}
.addBagBtn:hover{
  border:1px solid #C79C57;
  color:#000;
  background-color: #fff;
}
.size{
  width:5rem;
  height:3rem;
  line-height: 3rem;
  border: 1px solid #ddd;
  color:black;
  text-decoration: none;
  cursor: pointer;
}
.size:hover{
  background-color: #333;
  color:#fff;
}
.sizeSelect{
  background-color: #333;
  color:#fff;
}
.mt100{
  margin-top: 100px;
}
#carousel{
  top:130px;
}
</style>
