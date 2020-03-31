<template >
  <div class="fixed-top">
    <b-navbar toggleable="lg" type="light" variant="light" class="py-3">
      <b-navbar-brand to="/" class="text-dark"><h2 class="mb-0">NIKEDIN</h2></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item href="javascript:;" to="/shop/men" @mouseenter="navHover" @click="navleave"><div v-if="navName == 'MEN'" class="arrow"></div>MEN</b-nav-item>
          <b-nav-item href="javascript:;" to="/shop/women" @mouseenter="navHover" @click="navleave"><div v-if="navName == 'WOMEN'" class="arrow"></div>WOMEN</b-nav-item>
          <b-nav-item href="javascript:;" to="/shop/kids" @mouseenter="navHover" @click="navleave"><div v-if="navName == 'KIDS'" class="arrow"></div>KIDS</b-nav-item>
          <b-nav-item href="javascript:;" @mouseenter="navHover" ><div v-if="navName == 'PERFORMANCE'" class="arrow"></div>PERFORMANCE</b-nav-item>
          <b-nav-item href="javascript:;" @mouseenter="navHover"><div v-if="navName == 'SALE'" class="arrow"></div>SALE</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <b-nav-item href="#">
            <b-icon icon="search" ></b-icon>
            Search</b-nav-item>
          <b-nav-item href="#">
            <b-icon icon="geo-alt" ></b-icon>
            Store</b-nav-item>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <b-icon icon="person" ></b-icon>
              <span>User</span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign In</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item href="#">
            <b-icon icon="bag" ></b-icon>
            Bag
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- NavSide -->
    <!-- MEN -->
    <div v-if="navName == 'MEN'" >
      <div class="row bg-white mx-3 border border-top-0" >
        <div class=" menuItem w-100 d-sm-none d-md-flex px-2 py-3 " @mouseleave="navleave">
          <ul class="d-flex flex-column text-left ml-4 mr-5">
            <li>HIGHLIGHTS</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">CK ONE</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">White Day Gifts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Couple Sets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Out of Season</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>APPAREL</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Jackets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Coats</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweaters</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">T-shirts + Tanks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Polo Shirts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shirts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Denim Jeans</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>ACCESSORIES</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Bags + Backpacks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Wallets + Small Accessories</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Belts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Watches + Jewelry</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shoes</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Socks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sunglasses</a></li>
          </ul>
          <div class=" ml-auto menuImg" >
            <a href="">
              <img src="https://www.calvinklein.com/sgstatic/on/demandware.static/-/Sites-calvinklein-other-navigation/default/dw80acd4ab/CK1-reskin-dropdown-menu-banner.jpg">
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
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">CK ONE</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">White Day Gifts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Couple Sets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Out of Season</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>APPAREL</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Jackets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Coats</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweaters</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">T-shirts + Tanks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Polo Shirts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shirts</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>ACCESSORIES</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Bags + Backpacks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Wallets + Small Accessories</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Belts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Watches + Jewelry</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shoes</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Socks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sunglasses</a></li>
          </ul>
          <div class=" ml-auto menuImg" >
            <img src="https://www.calvinklein.com/sgstatic/on/demandware.static/-/Sites-calvinklein-other-navigation/default/dwc03dcfa0/CK1-reskin-dropdown-menu-banner-2.jpg">
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
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">CK ONE</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">White Day Gifts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Couple Sets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Out of Season</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>BOYS</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href=""> T-Shirts + Tops</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Jackets + Coats</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Pants + Shorts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Underwear</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Swimwear</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sleepwear</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>GIRLS</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href=""> T-Shirts + Tops</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Jackets + Coats</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Pants + Shorts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Underwear</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Swimwear</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sleepwear</a></li>
          </ul>
          <div class=" ml-auto menuImg" >
            <img src="https://www.calvinklein.com/sgstatic/on/demandware.static/-/Sites-calvinklein-other-navigation/default/dwf499e027/DEC%2027%20-%20dropdown%20menu%20banner%20KIDS.jpg">
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
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">CK ONE</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">White Day Gifts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Couple Sets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Out of Season</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>MEN</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Jackets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Coats</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweaters</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">T-shirts + Tanks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Polo Shirts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shirts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Denim Jeans</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>WOMEN</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Bags + Backpacks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Wallets + Small Accessories</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Belts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Watches + Jewelry</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shoes</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Socks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sunglasses</a></li>
          </ul>
          <div class=" ml-auto menuImg" >
            <img src="https://www.calvinklein.com/sgstatic/on/demandware.static/-/Sites-calvinklein-other-navigation/default/dwcf54a478/DEC%2027%20-%20dropdown%20menu%20banner%20CKP.jpg">
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
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">CK ONE</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">White Day Gifts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Couple Sets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Out of Season</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">New Arrivals</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>MEN</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Jackets</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Coats</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweaters</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">T-shirts + Tanks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Polo Shirts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shirts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Denim Jeans</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>WOMEN</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Bags + Backpacks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Wallets + Small Accessories</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Belts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Watches + Jewelry</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shoes</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Socks</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sunglasses</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>BOYS</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href=""> T-Shirts + Tops</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Jackets + Coats</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Pants + Shorts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Underwear</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Swimwear</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sleepwear</a></li>
          </ul>
          <ul class="d-flex flex-column text-left mr-5">
            <li>GIRLS</li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Shop All</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href=""> T-Shirts + Tops</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sweatshirts + Hoodies</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Jackets + Coats</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Pants + Shorts</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Underwear</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Swimwear</a></li>
            <li><a class="text-secondary text-decoration-none" style="font-size: 12px;" href="">Sleepwear</a></li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Nav',
  data: () => ({
    navName: ''
  }),
  mounted () {
  },
  computed: {

  },
  methods: {
    navHover (e) {
      if (document.body.clientWidth <= 991) return false
      this.navName = e.target.text
    },
    navleave () {
      if (document.body.clientWidth <= 991) return false
      this.navName = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
