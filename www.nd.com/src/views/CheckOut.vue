<template>
  <div class="checkout">
    <Nav></Nav>
    <section class="mt100">
      <!-- TitleText -->
      <div class="cartContent container py-5">
        <!-- isset -->
        <div class="text-center bagBtn_header" v-if="totalPrice.totalNum>= 1">
          <h1>Your bag total is NT$ {{ totalPrice.totalPrice }}</h1>
          <div class="text">
            <span>Get free shipping and free returns on all orders.</span>
          </div>
          <div class="checkOut mt-3 d-inline-block w35p">
            <button class="btn defaultBtn checkOutBtn btn-block">Check Out</button>
          </div>
        </div>
        <!-- empty -->
        <div class="text-center my-5 pt-5 h200 emptyText" v-else>
          <div>
            <h1>Your bag is empty.</h1>
            <div class="text">
              <span>Your bag is empty.</span>
            </div>
            <div class="checkOut mt-3 d-inline-block w35p">
              <router-link to="/" class="text-decoration-none">
                <button class="btn defaultBtn btn-block">Continue Shopping</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cartListArea container pb-5" v-if="totalPrice.totalNum>= 1">
      <table class="table  table-hover">
        <tbody class="border-bottom ">

          <tr class="text-left" v-for="(item, index) in orderCart" :key="index">
            <td>
              <router-link :to="'products/'+item.table.toLowerCase()+'/'+item.title.toLowerCase().split(' ').join('-')">
                <img :src="require('../assets/img/'+item.table+'/'+item.img)"  :alt="item.title">
              </router-link>
            </td>
            <td>
              <p class="h6">{{ item.title }}</p>
              <p>SIZE : {{ item.size }}</p>
            </td>
            <td>
              <div style="font-size: 0px" class="d-flex">
                <div  class="less text-center" @click="numEv('less', index)">
                  <b-icon-dash></b-icon-dash>
                </div>
                <input type="num" class="buyNum" disabled="disabled" align-middle :value="item.num" style="font-size: 1rem">
                <div class="plus text-center" @click="numEv('plus', index)">
                  <b-icon-plus></b-icon-plus>
                </div>
              </div>
            </td>
            <td class="h6">NT$ {{ item.num * item.price }}</td>
            <td class="text-center">
              <button class="btn btn-danger" @click="removeItem(index)">
                <svg class="bi bi-trash" width="1.4em" height="1.4em" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 7.5A.5.5 0 018 8v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V8z"/>
                  <path fill-rule="evenodd" d="M16.5 5a1 1 0 01-1 1H15v9a2 2 0 01-2 2H7a2 2 0 01-2-2V6h-.5a1 1 0 01-1-1V4a1 1 0 011-1H8a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM6.118 6L6 6.059V15a1 1 0 001 1h6a1 1 0 001-1V6.059L13.882 6H6.118zM4.5 5V4h11v1h-11z" clip-rule="evenodd"/>
                </svg>
              </button>
            </td>
          </tr>

        </tbody>
      </table>
      <div class="sun">
        <div class="nunText pb-2">
          <div class="d-flex py-1">
            <div class="subtotal w-50">Subtotal</div>
            <div class="subTotalM w-50 text-right">NT$ {{ totalPrice.totalPrice }}</div>
          </div>
          <div class="d-flex py-1">
            <div class="shipping w-50">Shipping</div>
            <div class="shippingM w-50 text-right">FREE</div>
          </div>
          <div class="d-flex border-bottom pt-1 pb-3">
            <div class="item w-50">Item</div>
            <div class="itemN w-50 text-right">{{ totalPrice.totalNum }}</div>
          </div>
          <div class="d-flex py-3">
            <div class="shipping w-50"><h3 class="mb-0">Total</h3></div>
            <div class="shippingM w-50 text-right"><h3 class="mb-0">NT$ {{ totalPrice.totalPrice }}</h3></div>
          </div>
            <button class="btn defaultBtn checkOutBtn btn-block">Check Out</button>
        </div>
      </div>
    </section>

    <EventMail></EventMail>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import EventMail from '../components/EventMail.vue'

export default {
  name: 'CheckOut',
  data: () => ({

  }),
  computed: {
    orderCart () {
      return this.$store.state.orderCart
    },
    totalPrice () {
      const allCart = this.orderCart
      const subTotal = {
        totalPrice: 0,
        totalNum: 0
      }
      if (allCart === [] || allCart === null) return false
      allCart.forEach((item, index) => {
        subTotal.totalNum += item.num
        subTotal.totalPrice += item.num * item.price
      })
      return subTotal
    }
  },
  mounted () {
  },
  methods: {
    removeItem (index) {
      this.$store.dispatch('REMOVE_ORDER_CART_ITEM', index).then(() => {
        this.$store.dispatch('ORDER_CART_LIST_GET')
      })
    },
    numEv (ev, index) {
      this.$store.dispatch('numItemEv', { ev, index }).then(() => {
        this.$store.dispatch('ORDER_CART_LIST_GET')
      })
    }
  },
  components: {
    Nav,
    EventMail,
    Footer
  }
}
</script>

<style scoped>
.mt100{
  margin-top: 70px;
}
.defaultBtn{
  background:#C79C57;
  color:#fff;
  border-radius: 2px;
}
.defaultBtn:hover{
  border:1px solid #C79C57;
  color:#000;
  background:#FFF;
}
.emptyText{
  height: 200px;
}
.w35p{
  width: 35%;
}
.nunText{
  margin-left: 40%;
}
td img{
  width: 100px;
}
.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
}
.buyNum{
  width: 34px;
  height: 30px;
  line-height: 34px;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  border-left: none;
  border-right: none;
  display: inline-block;
  text-align: center;
  z-index: 1;
}
.less {
  width: 34px;
  height: 30px;
  border: 1px solid #e1e1e1;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 30px;
}
.plus {
  width: 34px;
  height: 30px;
  border: 1px solid #e1e1e1;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 30px;
}
</style>
