<template >
  <div class="slidetable mx-5">
    <!-- slide Banner -->
    <form id="slideChg">
      <table class="table table-hover text-center mt-2" id="landingPageArea">
        <thead class="thead-light">
          <tr>
            <th scope="col">顯示</th>
            <th scope="col">圖片</th>
            <th scope="col">標題</th>
            <th scope="col">說明</th>
            <th scope="col" ><button type="button" class="btn plusBtn"><b-icon-plus></b-icon-plus></button></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td><input name="id" type="checkbox" v-model="data[index].dsp"></td>
            <td><img :src="require(`../assets/img/slide/${item.img}`)" :alt="item.title" width="200px"></td>
            <td>
              <input class="form-control" type="text" v-model="data[index].title">
            <td>
              <textarea class="form-control" name="" rows="3" v-model="data[index].info"></textarea>
            </td>
            <td>
              <p class="my-3"><button type="submit" class="btn btn-secondary" @click="updataItem(item.id, data[index])"><b-icon-arrow-repeat></b-icon-arrow-repeat></button></p>
              <p class="my-3"><button type="button" class="btn btn-danger" @click="deleteItem(item.id)"><b-icon-trash></b-icon-trash></button></p>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import slide from '../admin/slide.js'

export default {
  name: 'SlideTable',
  data: () => ({
    data: []
  }),
  created () {
    this.getSlide()
  },
  methods: {
    deleteItem (id) {
      slide.delete(id).then((res) => {
        this.getSlide()
      })
    },
    getSlide () {
      slide.get().then((res) => {
        this.data = res
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slidetable{
  margin-top: 100px;
}

.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {
    vertical-align: middle;
}

.plusBtn{
  color:#000;
  border:1px solid #C79C57;
}
.plusBtn:hover{
  background-color:#C79C57;
  color:#fff;
}
</style>
