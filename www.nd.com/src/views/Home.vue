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
              <picture><img class="w-100" src="images/landing/men-item1.jpg" alt=""></picture>
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
              <picture><img class="w-100" src="images/landing/men-item2.jpg" alt=""></picture>
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
              <picture><img class="w-100" src="images/landing/men-item3.jpg" alt=""></picture>
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
              <picture><img class="w-100" src="images/landing/men-item4.jpg" alt=""></picture>
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
              <picture><img class="w-100" src="images/landing/women-item1.jpg" alt=""></picture>
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
              <picture><img class="w-100" src="images/landing/women-item2.jpg" alt=""></picture>
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
              <picture><img class="w-100" src="images/landing/women-item3.jpg" alt=""></picture>
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
              <picture><img class="w-100" src="images/landing/women-item4.jpg" alt=""></picture>
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
  mounted () {
    this.$store.dispatch('SLIDE_SELECT')
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

<style>
.carousel-control-next-icon{
  /* svg -> base64 */
  background: url('data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYmkgYmktY2hldnJvbi1jb21wYWN0LXJpZ2h0IiB3aWR0aD0iM3JlbSIgaGVpZ2h0PSIzcmVtIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9IiNmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC43NzYgMy41NTNhLjUuNSAwIDAxLjY3MS4yMjNsMyA2YS41LjUgMCAwMTAgLjQ0OGwtMyA2YS41LjUgMCAxMS0uODk0LS40NDhMMTEuNDQgMTAgOC41NTMgNC4yMjRhLjUuNSAwIDAxLjIyMy0uNjcxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==') no-repeat;
  width: 3rem;
  height: 3rem;
  text-align: center;
}
.carousel-control-prev-icon{
  background: url('data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iYmkgYmktY2hldnJvbi1jb21wYWN0LWxlZnQiIHdpZHRoPSIzZW0iIGhlaWdodD0iM2VtIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9IiNmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTEuMjI0IDMuNTUzYS41LjUgMCAwMS4yMjMuNjdMOC41NiAxMGwyLjg4OCA1Ljc3NmEuNS41IDAgMTEtLjg5NC40NDhsLTMtNmEuNS41IDAgMDEwLS40NDhsMy02YS41LjUgMCAwMS42Ny0uMjIzeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==') no-repeat;
  width: 3rem;
  height: 3rem;
  text-align: center;
}
</style>
