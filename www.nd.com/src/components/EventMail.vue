<template >
  <div class="eventMail">
    <!-- contactUs -->
  <form id="couponForm">
    <section class="contactUs px-1 px-md-5 my-5 d-flex align-items-center">
        <div class="container px-md-5 inputSpace">
          <div class="row text-white px-md-5 inputContent">
            <div class="col-12 col-md-6 text-left"><h1>TAKE 10% OFF, ON US</h1></div>
            <div class="col-12 col-md-6 text-left"><p>Sign up now to enjoy 10% off your purchase and receive the latest news on new arrivals, exclusive promotions, and more.</p></div>
            <div class="col-12 ">
            <div class="input-group mb-3">
              <input type="email" name="eventMail" class="form-control" placeholder="Enter your email" >
              <div class="input-group-append">
                <b-button class="btn contactUsBtn" type="submit" >SUBMIT</b-button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EventMail'
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
.contactUs{
  height:350px;
  width:100;
  background:
            linear-gradient(to right, rgba(0,0,0,.5), rgba(202, 67, 67, 0.1)),
            url('../assets/img/landing/ck_bg.jpg') no-repeat center top fixed ;
  background-size: cover;
  border-bottom: 7px solid #C79C57;
  text-shadow: 0 0 1px #999;
}
.contactUsBtn {
  background-color: #C79C57;
  color: #fff;
  border: 1px solid #C79C57;
}
.contactUsBtn:hover{
  color: #000;
}
</style>
