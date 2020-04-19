<template>
  <div class="admin">

    <!-- nav -->
    <nav class="navbar navTop fixed-top navbar-expand-lg navbar-light bg-light py-3 px-4">
      <router-link to="/admin" class="text-decoration-none text-dark" @click.native="sidebar.clickItem = ''">
        <h5 class="mb-0">後台管理系統</h5>
      </router-link>
      <button type="button" class="btn ml-3 logOutbtn" @click="signOut">登 出</button>
      <h4 class="itemText mx-auto mb-0"><span v-if="sidebar.clickItem !== 'admin'">{{ sidebar.clickItem }}</span></h4>
      <router-link to="/" class="navbar-brand mr-0" ><h2 class="mb-0">NIKEDIN</h2></router-link>
    </nav>

    <div class="main d-flex">
      <!-- sideBar -->
      <ul class="sidebar menuList d-flex mb-0 flex-column vh-100" style="padding-top: 80px;padding-inline-start: 0px;">
        <li class="text-center"><router-link to="/admin/首頁管理" class="py-4 d-block text-decoration-none" @click.native="showItem" :class="{ itemBg: this.sidebar.clickItem == '首頁管理' }">首頁管理</router-link></li>
        <li class="text-center"><router-link to="/admin/商品管理" class="py-4 d-block text-decoration-none" @click.native="showItem" :class="{ itemBg: this.sidebar.clickItem == '商品管理' }">商品管理</router-link></li>
        <li class="text-center"><router-link to="/admin/優惠活動" class="py-4 d-block text-decoration-none" @click.native="showItem" :class="{ itemBg: this.sidebar.clickItem == '優惠活動' }">優惠活動</router-link></li>
        <li class="text-center"><router-link to="/admin/客戶管理" class="py-4 d-block text-decoration-none" @click.native="showItem" :class="{ itemBg: this.sidebar.clickItem == '客戶管理' }">客戶管理</router-link></li>
        <li class="text-center"><router-link to="/admin/訂單管理" class="py-4 d-block text-decoration-none" @click.native="showItem" :class="{ itemBg: this.sidebar.clickItem == '訂單管理' }">訂單管理</router-link></li>
      </ul>
      <!-- right side -->
      <div class="content w-100 overflow-auto vh-100">
        <div v-if="!sidebar.clickItem" class="noneItem px-3">
          <img src="images/landing/ck_bg.jpg" class="w-100" alt="">
        </div>
        <!-- item DB -->
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import mysql from '../admin/mysql'

export default {
  name: 'Admin',
  components: {

  },
  data: () => ({
    sidebar: {
      clickItem: ''
    }
  }),
  computed: {
  },
  created () {
    const token = localStorage.getItem('TOKEN')
    if (!token) return this.$router.replace({ path: '/' })
    else if (token) {
      mysql.post('GET_admin', token)
    }
    const itemName = this.$route.name
    if (itemName !== 'admin') this.sidebar.clickItem = itemName
  },
  mounted () {
  },
  methods: {
    showItem (e) {
      this.sidebar.clickItem = e.target.innerText
    },
    signOut () {
      this.$store.dispatch('logOut').then(() => {
        this.$router.replace({ path: '/' })
      })
    }
  }
}
</script>

<style scoped>
.noneItem{
  margin-top: 70px;
  overflow: hidden;
}

.logOutbtn{
  color:#000;
  border:1px solid #C79C57;
}
.logOutbtn:hover{
  background-color:#C79C57;
  color:#fff;
}

nav > h4{
  color:#C79C57;
}

.main > ul{
  width: 14rem;
  background-color: #C79C57;
  cursor: pointer;
  color: #fff;
}
li a{
  color: #fff;
}
li a:hover{
  color: #666;
}

.itemBg{
  background: white;
  color: #666;
  font-weight: bold;
}

</style>
