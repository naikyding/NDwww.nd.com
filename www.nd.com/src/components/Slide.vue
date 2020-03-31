<template>
  <div class=" h-100">
    <b-carousel
      id="carousel"
      fade
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style=""
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="(slide, index) in slideData"
        :key="index"
        class="vh-100"
      >
        <template v-slot:img class="">
          <img
            class="d-block img-fluid "
            :src="require('../assets/img/slide/'+slide.img)"
            :alt="slide.title"
            >
        </template>
          <h1>{{slide.title}}</h1>
          <p>{{slide.info}}</p>
      </b-carousel-slide>

    </b-carousel>
<!--
    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'Slide',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  props: ['slideData'],
  methods: {
    onSlideStart (slide) {
      this.sliding = true
      // console.log(this.slideData)
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

img.d-block{
  width:100%;
  height:100%;
  object-fit:cover;
object-position: 50% 0px;
}
.size{
  width:5rem;
  height:3rem;
  line-height: 3rem;
}
.sizeSelectA, #numSelect{
  cursor: pointer;
}
.product_size a{
  border: 1px solid #ddd;
  color:black;
  text-decoration: none;
}
.product_size a:hover{
  background-color: #333;
  color:#fff;
}
</style>
