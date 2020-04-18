<template >
  <div class="fixed-top">
    <b-navbar toggleable="lg" type="light" class="py-3" :class="{ 'bg-black': !navShow, 'bg-light': navShow }">

      <transition name="slide-search">
        <div v-if="!navShow" class="searchBar w-100 text-center d-flex justify-content-center align-items-center">
          <b-icon @click="sendKeyword" class="h4 mb-0 searchIcon" icon="search" ></b-icon>
          <input class="mx-2" type="text" v-model.trim="keyword" placeholder="Search nd.com" @keydown.enter="sendKeyword">
          <b-icon @click="navShow = !navShow" class="h4 mb-0 searchIcon" icon="X" ></b-icon>
        </div>
      </transition>

      <transition name="slide-fade">
        <b-navbar-brand v-if="navShow" to="/" class="text-dark"><h2 class="mb-0">NIKEDIN</h2></b-navbar-brand>
      </transition>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <transition name="slide-fade">
        <b-collapse v-if="navShow" id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto">
            <b-nav-item href="javascript:;" to="/shop/men" @mouseenter="navHover" @click="navleave"><div v-if="navName == 'MEN'" class="arrow"></div>MEN</b-nav-item>
            <b-nav-item href="javascript:;" to="/shop/women" @mouseenter="navHover" @click="navleave"><div v-if="navName == 'WOMEN'" class="arrow"></div>WOMEN</b-nav-item>
            <b-nav-item href="javascript:;" to="/shop/kids" @mouseenter="navHover" @click="navleave"><div v-if="navName == 'KIDS'" class="arrow"></div>KIDS</b-nav-item>
            <b-nav-item href="javascript:;" @mouseenter="navHover"><div v-if="navName == 'PERFORMANCE'" class="arrow"></div>PERFORMANCE</b-nav-item>
            <b-nav-item href="javascript:;" @mouseenter="navHover"><div v-if="navName == 'SALE'" class="arrow"></div>SALE</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item href="javascript:;" @click="navShow = !navShow" @mouseenter="navHover">
              <b-icon icon="search"></b-icon>
              Search
            </b-nav-item>
            <b-nav-item href="javascript:;">
              <b-icon icon="geo-alt" ></b-icon>
              Store</b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content v-if="!userName">
                <b-icon icon="person"></b-icon>
                User
              </template>
              <template v-slot:button-content v-else>
                <b-icon icon="person"></b-icon>
                {{ userName }}
              </template>
              <b-dropdown-item href="javascript:;">Profile</b-dropdown-item>
              <b-dropdown-item href="javascript:;" v-b-modal.modal_logIn v-if="!userName">Sign In</b-dropdown-item>
              <b-dropdown-item href="javascript:;" to="/admin" v-else-if="userName == 'admin'">Admin</b-dropdown-item>
              <b-dropdown-item href="javascript:;" @click="signOut" v-if="userName">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item @click="show = !show">
              <b-icon icon="bag"></b-icon>
              <span class="totalNum" v-if="totalPrice.totalNum >= 1" >{{ totalPrice.totalNum }}</span>
              Bag
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </transition>
    </b-navbar>

    <!-- NavSide -->
    <!-- MEN -->
    <div v-if="navName == 'MEN'" >
      <div class="row bg-white mx-3 border border-top-0" >
        <div class=" menuItem w-100 d-sm-none d-md-flex px-2 py-3 " @mouseleave="navleave">
          <ul class="d-flex flex-column text-left ml-4 mr-5">
            <li>HIGHLIGHTS</li>
            <li><a class="text-secondary itemText" href="javascript:;">CK ONE</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">White Day Gifts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Couple Sets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Out of Season</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>APPAREL</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Jackets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Coats</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweaters</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">T-shirts + Tanks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Polo Shirts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Shirts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Denim Jeans</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>ACCESSORIES</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Bags + Backpacks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Wallets + Small Accessories</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Belts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Watches + Jewelry</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Shoes</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Socks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sunglasses</a></li>
          </ul>
          <div class=" ml-auto menuImg" >
            <a href="javascript:;">
              <img src="images/Nav/MEN.jpg">
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- WOMEN -->
    <div v-if="navName == 'WOMEN'" >
      <div class="row bg-white mx-3 border border-top-0" >
        <div class=" menuItem w-100 d-flex px-2 py-3"  @mouseleave="navleave">
          <ul class="d-flex flex-column text-left ml-4 mr-5">
            <li>HIGHLIGHTS</li>
            <li><a class="text-secondary itemText" href="javascript:;">CK ONE</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">White Day Gifts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Couple Sets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Out of Season</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>APPAREL</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Jackets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Coats</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweaters</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">T-shirts + Tanks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Polo Shirts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Shirts</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>ACCESSORIES</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Bags + Backpacks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Wallets + Small Accessories</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Belts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Watches + Jewelry</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Shoes</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Socks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sunglasses</a></li>
          </ul>
          <div class=" ml-auto menuImg" >
            <img src="images/Nav/WOMEN.jpg">
          </div>
        </div>
      </div>
    </div>

    <!-- KIDS -->
    <div v-if="navName == 'KIDS'" >
      <div class="row bg-white mx-3 border border-top-0" >
        <div class=" menuItem w-100 d-flex px-2 py-3"  @mouseleave="navleave">
          <ul class="d-flex flex-column text-left ml-4 mr-5">
            <li>HIGHLIGHTS</li>
            <li><a class="text-secondary itemText" href="javascript:;">CK ONE</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">White Day Gifts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Couple Sets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Out of Season</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>BOYS</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;"> T-Shirts + Tops</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Jackets + Coats</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Pants + Shorts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Underwear</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Swimwear</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sleepwear</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>GIRLS</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;"> T-Shirts + Tops</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Jackets + Coats</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Pants + Shorts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Underwear</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Swimwear</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sleepwear</a></li>
          </ul>
          <div class=" ml-auto menuImg" >
            <img src="images/Nav/KIDS.jpg">
          </div>
        </div>
      </div>
    </div>

    <!-- PERFORMANCE -->
    <div v-if="navName == 'PERFORMANCE'" >
      <div class="row bg-white mx-3 border border-top-0" >
        <div class=" menuItem w-100 d-flex px-2 py-3"  @mouseleave="navleave">
          <ul class="d-flex flex-column text-left ml-4 mr-5">
            <li>HIGHLIGHTS</li>
            <li><a class="text-secondary itemText" href="javascript:;">CK ONE</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">White Day Gifts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Couple Sets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Out of Season</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>MEN</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Jackets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Coats</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweaters</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">T-shirts + Tanks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Polo Shirts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Shirts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Denim Jeans</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>WOMEN</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Bags + Backpacks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Wallets + Small Accessories</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Belts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Watches + Jewelry</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Shoes</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Socks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sunglasses</a></li>
          </ul>
          <div class=" ml-auto menuImg" >
            <img src="images/Nav/PERFORMANCE.jpg">
          </div>
        </div>
      </div>
    </div>

    <!-- SALE -->
    <div v-if="navName == 'SALE'" >
      <div class="row bg-white mx-3 border border-top-0" >
        <div class=" menuItem w-100 d-flex px-2 py-3"  @mouseleave="navleave">
          <ul class="d-flex flex-column text-left ml-4 mr-5">
            <li>HIGHLIGHTS</li>
            <li><a class="text-secondary itemText" href="javascript:;">CK ONE</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">White Day Gifts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Couple Sets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Out of Season</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>MEN</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Jackets</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Coats</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweaters</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">T-shirts + Tanks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Polo Shirts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Shirts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Denim Jeans</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>WOMEN</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Bags + Backpacks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Wallets + Small Accessories</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Belts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Watches + Jewelry</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Shoes</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Socks</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sunglasses</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>BOYS</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;"> T-Shirts + Tops</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Jackets + Coats</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Pants + Shorts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Underwear</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Swimwear</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sleepwear</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>GIRLS</li>
            <li><a class="text-secondary itemText" href="javascript:;">Shop All</a></li>
            <li><a class="text-secondary itemText" href="javascript:;"> T-Shirts + Tops</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Jackets + Coats</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Pants + Shorts</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Underwear</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Swimwear</a></li>
            <li><a class="text-secondary itemText" href="javascript:;">Sleepwear</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Cart -->
    <div v-if="show" class="cart px-2 py-2" @mouseenter="clearTimeOut" @mouseleave="show = !show">
      <div class="py-2" v-if="!totalPrice || totalPrice.totalPrice === 0">
        <span style="font-size: .6rem">YOU HAVE NO ITEMS IN YOUR BAG.</span>
      </div>

      <!-- LIST ITEM -->
      <div v-else class="overFlow">
        <div class="row p-2 position-relative" v-for="(item, index) in orderCart" :key="index">
          <div class="revomeIcon position-absolute">
            <a href="javascript:;" class="text-decoration-none text-dark" @click="removeItem(index)">
              <b-icon-x-circle-fill></b-icon-x-circle-fill>
            </a>
          </div>
          <div class="img pr-1 col-4">
            <img class="mb-2" :src="`images/${item.table}/${item.img}`" :alt="item.title" width="100%">
          </div>
          <div class="text col-8 text-left pl-0">
            <ul class="cartList">
              <li class="h6">{{ item.title }}</li>
              <li>COLOR: {{ item.color }}</li>
              <li>SIZE: {{ item.size }}</li>
              <li>QTY: {{ item.num }}</li>
              <li class="text-right h6">NT$ {{ item.price * item.num }}</li>
            </ul>
          </div>
          <div class="w-100 px-3">
            <div class="border-bottom "></div>
          </div>
        </div>
      </div>
      <div v-show="totalPrice.totalPrice >= 1" class="row my-2">
        <div class="col-7 pl-4 text-left">
          <b class="mr-1">SUBTOTAL</b>
          <span>{{ totalPrice.totalNum }}&nbsp;</span>
          <span style="font-size:.5rem">ITEMS</span>
        </div>
        <div class="col-5 text-right pr-4 mb-2">
          <b>NT$ {{ totalPrice.totalPrice }}</b>
        </div>
        <div class="text-center w-100 px-4">
          <router-link to="/checkout">
            <input class="checkOut w-100" type="button" value="CHECK OUT">
          </router-link>
        </div>
      </div>
    </div>

  <!-- MODEL -->
  <div>
    <b-modal id="modal_logIn" hide-header hide-footer centered @change="changModal">
      <div>
        <div class="py-3 text-center"><h3 class="mt-0">LOG IN</h3></div>
        <!-- USER ID -->
        <div>
          <b-form class="px-4" @submit.stop.prevent>
            <!-- userId -->
            <label for="feedback-user">User ID</label>
            <b-input v-model.trim="log.userId" class="acc" :state="userIdState" placeholder="check console"></b-input>
            <b-form-invalid-feedback :state="userIdState">
              Please enter valid NIKEDIN Member ID or email
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="userIdState">
              Welcome!
            </b-form-valid-feedback>
            <!-- passWord -->
            <label class="mt-3" for="text-password">Password</label>
            <b-input type="password" v-model="log.psw" aria-describedby="password-help-block" @keydown.enter="logIn"></b-input>
            <b-form-checkbox class="mb-2 mt-3 mr-sm-2 mb-sm-0" v-model="log.remember">Remember me</b-form-checkbox>
            <div class="text-danger" v-if="logCheckState == false">Invalid account or password, please try again.</div>
          </b-form>
        </div>

        <div class="text-center w-100 px-4 mt-4 mb-3">
          <input class="confirmBtn w-100" type="button" value="Confirm" @click="logIn">
        </div>

      </div>
    </b-modal>
  </div>

  </div>
</template>

<script>
import storage from '../storage/index.js'

export default {
  name: 'Nav',
  data: () => ({
    navShow: true,
    navName: '',
    show: false,
    setTimeoutId: '',
    log: {
      userId: '',
      psw: '',
      remember: false
    },
    keyword: ''
  }),
  created () {
    this.cartListSelect()
    this.accChk()
    this.keyword = this.$store.state.search.keyword
  },
  computed: {
    keyword_state () {
      return this.$store.state.search.keyword
    },
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
    },
    validation () {
      return this.log.userId.length > 4 && this.log.userId.length < 13
    },
    userIdState () {
      return this.$store.state.user.id
    },
    logCheckState () {
      return this.$store.state.log
    },
    userName () {
      return this.$store.state.logIn.userName
    }
  },
  watch: {
    userName (newName) {
      if (newName === 'admin') {
        storage.set('TOKEN', this.$store.state.logIn.token)
        this.$router.push({ path: '/admin' })
      }
    },
    navShow (newState) {
      if (!newState) {
        this.$nextTick(() => {
          document.querySelector('input.mx-2').focus()
          this.navName = ''
        })
      }
    },
    keyword_state (newItem) {
      this.keyword = newItem
    },
    'log.userId' (newVal) {
      return this.$store.dispatch('accCheck', this.log.userId)
    },
    logCheckState (newVal) {
      if (newVal === true) {
        this.$bvModal.hide('modal_logIn')
        this.log = this.$options.data().log
      }
    }
  },
  methods: {
    changModal () {
      setTimeout(() => {
        document.querySelector('input.acc').focus()
      }, 300)
    },
    accChk () {
      const token = storage.get('TOKEN')
      if (!token) return false
      this.$store.dispatch('rememberAcc', token)
    },
    navHover (e) {
      if (!this.navShow) return false
      if (document.body.clientWidth <= 991) return false
      this.navName = e.target.text
    },
    navleave () {
      if (document.body.clientWidth <= 991) return false
      this.navName = ''
    },
    cartListSelect () {
    },
    removeItem (index) {
      this.$store.dispatch('REMOVE_ORDER_CART_ITEM', index).then(() => {
        this.$store.dispatch('ORDER_CART_LIST_GET')
      })
    },
    clearTimeOut () {
      clearTimeout(this.setTimeoutId)
    },
    logIn () {
      if (!this.log.userId || !this.log.psw) return false
      const userData = {
        acc: this.log.userId,
        psw: this.log.psw
      }
      this.$store.dispatch('logIn', [userData, this.log.remember])
    },
    signOut () {
      this.$store.dispatch('logOut')
    },
    sendKeyword () {
      if (!this.keyword) return false
      this.navShow = !this.navShow
      this.$store.commit('SET_KEYWORD', this.keyword)
      if (this.$route.path === '/search') return false
      this.$router.push({ path: '/search' })
      this.keyword = ''
    }
  },
  updated () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemText{
  font-size: 12px;
  text-decoration: none;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.menuImg img{
  width:300px;
}

a.nav-link{
  position: relative;
}

div.arrow::before{
  position: absolute;
  content: '';
  width:10px;
  height:10px;
  bottom:-.5rem;
  left:50%;
  margin-left: -5px;
  border-right:5px solid transparent ;
  border-bottom:5px solid transparent ;
  border-left:5px solid transparent ;
  border-top: 5px solid #C79C57;
}

.cart {
  position:absolute;
  top:70px;
  right:30px;
  width: 300px;
  background: #fff;
  border-radius: 5px;
  filter: drop-shadow(0 0 1px #ddd);
  z-index: 3;
}
.cart::before {
  content: '';
  position: absolute;
  top: -12px;
  right: 19px;
  border-width: 0px 12px 12px 12px;
  border-style: solid;
  border-color: transparent transparent #fff transparent;
}

.searchIcon{
  color: rgba(255, 255, 255, .4);
  cursor: pointer;
}

.overFlow{
  max-height: 310px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.cartList > li{
  font-size: 12px;
  display: block;
}

.cartList > li.h6{
  font-size: .8rem;
  font-weight: bold;
}

.checkOut{
  background-color: #C79C57;
  border:1px solid #C79C57;
  color:#fff;
  height:2rem;
  border-radius:2px;
}
.checkOut:hover{
  border:1px solid #C79C57;
  color:#000;
  background-color: #fff;
}

.revomeIcon{
  top: 0px;
  left: 7%;
  z-index: 1;
}

.totalNum{
  position: absolute;
  top:50%;
  right:50%;
  width: 1.2rem;
  height: 1.2rem;
  background-color: #C79C57;
  border-radius: 50%;
  line-height: 1.2rem;
  color:#fff;
  font-size: .6rem;
}

.modal-title{
  width: 100%;
  text-align: center;
}

.confirmBtn{
  background-color: #C79C57;
  border:1px solid #C79C57;
  color:#fff;
  height:3rem;
  border-radius:2px;
}

.confirmBtn:hover{
  border:1px solid #C79C57;
  color:#000;
  background-color: #fff;
}

.bg-black{
  background: rgba(0, 0, 0, 0.8);
}

input.mx-2{
  background: rgba(0, 0, 0, 0);
  border: 0px;
  font-size: 1rem;
  width: 30%;
  height: 2rem;
  position: relative;
  color: #fff;
  padding: 0 1rem;
}

.slide-search-enter-active {
  transition: all .5s ease;
}
/* .slide-search-enter-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */

.slide-fade-enter-active {
  transition: all .5s ease;
}
/* .slide-fade-enter-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
} */

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.slide-search-enter, .slide-search-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
