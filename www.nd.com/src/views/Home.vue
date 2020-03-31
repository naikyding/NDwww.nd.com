<template>
  <div class="home">
    <div class="vh-100">
      <Nav ></Nav>
      <Slide :slideData="slideData" ></Slide>
    </div>
    <section>
      <main class="container-fluid">
        <!-- MEN -->
        <div class="mainTitle text-center my-5"><h2 class="mb-0">MEN'S APPAREL</h2></div>
        <div class="row mx-1 mx-lg-5 mt-0">
          <div class="col-6 col-md-3 mb-4 mb-md-0 text-left">
            <router-link to="/shop/men">
              <picture><img class="w-100" src="../assets/img/landing/men_item1.jpg" alt=""></picture>
            </router-link>
            <div class="headTitle"><h4 class="my-3">APPAREL</h4></div>
            <div class="itemBtn">
              <router-link to="/shop/men">
                <button class="px-2 px-md-4 py-2 px-md-5">SHOP NOW</button>
              </router-link>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0 text-left">
            <router-link to="/shop/men">
              <picture><img class="w-100" src="../assets/img/landing/men_item2.jpg" alt=""></picture>
            </router-link>
            <div class="headTitle"><h4 class="my-3">UNDERWEAR</h4></div>
            <div class="itemBtn ">
              <router-link to="/shop/men">
                <button class="px-2 px-md-4 py-2 px-md-5">SHOP NOW</button>
              </router-link>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0 text-left">
            <router-link to="/shop/men">
              <picture><img class="w-100" src="../assets/img/landing/men_item3.jpg" alt=""></picture>
            </router-link>
            <div class="headTitle"><h4 class="my-3">ACTIVEWEAR</h4></div>
            <div class="itemBtn">
              <router-link to="/shop/men">
                <button class="px-2 px-md-4 py-2 px-md-5">SHOP NOW</button>
              </router-link>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0 text-left">
            <router-link to="/shop/men">
              <picture><img class="w-100" src="../assets/img/landing/men_item4.jpg" alt=""></picture>
            </router-link>
            <div class="headTitle"><h4 class="my-3">ACCESSORIES</h4></div>
            <div class="itemBtn">
              <router-link to="/shop/men">
                <button class="px-2 px-md-4 py-2 px-md-5">SHOP NOW</button>
              </router-link>
            </div>
          </div>
        </div>
        <!-- WOMEN -->
        <div class="mainTitle text-center my-5"><h2 class="mb-0">WOMEN'S APPAREL</h2></div>
        <div class="row mx-lg-5 mt-0">
          <div class="col-6 col-md-3 mb-4 mb-md-0 text-left">
            <router-link to="/shop/women">
              <picture><img class="w-100" src="../assets/img/landing/women_item1.jpg" alt=""></picture>
            </router-link>
            <div class="headTitle"><h4 class="my-3">APPAREL</h4></div>
            <div class="itemBtn">
              <router-link to="/shop/women">
                <button class="px-2 px-md-4 py-2 px-md-5">SHOP NOW</button>
              </router-link>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0 text-left">
            <router-link to="/shop/women">
              <picture><img class="w-100" src="../assets/img/landing/women_item2.jpg" alt=""></picture>
            </router-link>
            <div class="headTitle"><h4 class="my-3">UNDERWEAR</h4></div>
            <div class="itemBtn ">
              <router-link to="/shop/women">
                <button class="px-2 px-md-4 py-2 px-md-5">SHOP NOW</button>
              </router-link>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0 text-left">
            <router-link to="/shop/women">
              <picture><img class="w-100" src="../assets/img/landing/women_item3.jpg" alt=""></picture>
            </router-link>
            <div class="headTitle"><h4 class="my-3">ACTIVEWEAR</h4></div>
            <div class="itemBtn">
              <router-link to="/shop/women">
                <button class="px-2 px-md-4 py-2 px-md-5">SHOP NOW</button>
              </router-link>
            </div>
          </div>
          <div class="col-6 col-md-3 mb-4 mb-md-0 text-left">
            <router-link to="/shop/women">
              <picture><img class="w-100" src="../assets/img/landing/women_item4.jpg" alt=""></picture>
            </router-link>
            <div class="headTitle"><h4 class="my-3">ACCESSORIES</h4></div>
            <div class="itemBtn">
              <router-link to="/shop/women">
                <button class="px-2 px-md-4 py-2 px-md-5">SHOP NOW</button>
              </router-link>
            </div>
          </div>
        </div>
      </main>
    </section>
    <EventMail></EventMail>
    <Footer></Footer>
    <!-- <img alt="Vue logo" src="../assets/logo.png">-->
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Slide from '@/components/Slide.vue'
import EventMail from '@/components/EventMail.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  data: () => ({
    navName: ''
  }),
  computed: {
    slideData () {
      return this.$store.state.slide
    }
  },
  components: {
    Nav,
    Slide,
    EventMail,
    Footer
  },
  methods: {
  }
}
</script>
