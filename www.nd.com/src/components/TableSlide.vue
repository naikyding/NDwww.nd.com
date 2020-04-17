<template >
  <div class="tableslide mx-5">
    <!-- Plus Item Modal -->
    <div>
      <!-- modal -->
      <b-modal id="newSlide_Modal" centered title="NEW SLIDE" hide-footer>
        <div class="px-3">
          <form id="newSlide" enctype="multipart/form-data" @submit="postSlide">

            <!-- img Display -->
            <div v-if="uploadFile.url" class="text-center p-3">
              <img class="slideImg text-center" :src="uploadFile.url" >
            </div>

            <!-- inputArea -->
            <div class="form-group">
              <label for="slideTitle">標題</label>
              <input type="text" name="title" class="form-control" id="slideTitle">
            </div>
            <div class="form-group">
              <label for="slideInfo">說明</label>
              <textarea type="text" name="info" id="slideInfo" class="form-control"></textarea>
            </div>
            <!-- uploadPhoto -->
            <div class="input-group">
              <label class="btn btn-secondary w-100">
                <input @change="uploadImg" type="file" name="img" accept="image/*" hidden >
                <i class="fas fa-arrow-circle-up"></i>上傳商品圖片
              </label>
              <span v-if="!uploadFile.state" class="text-small">請選取 1 個檔案</span>
              <span v-else class="text-small">已夾帶: {{ uploadFile.name }}</span>
            </div>

            <!-- footer Button -->
            <div class="modal-footer justify-content-around mt-2">
              <button type="button" class="btn btn-outline-danger">關 閉</button>
              <button type="submit" class="btn btn-lg btn-primary">送 出</button>
              <button type="reset" @click="fileReset" class="btn btn-outline-secondary">重 寫</button>
            </div>

          </form>
        </div>
      </b-modal>
    </div>
    <!-- slide Banner -->
    <form id="patchSlide" @submit="patchSlide" enctype="multipart/form-data">
      <table class="table table-hover text-center mt-2" id="landingPageArea">
        <thead class="thead-light">
          <tr>
            <th scope="col">顯示</th>
            <th scope="col">圖片</th>
            <th scope="col">標題</th>
            <th scope="col">說明</th>
            <th scope="col" ><button type="button" v-b-modal.newSlide_Modal class="btn plusBtn"><b-icon-plus></b-icon-plus></button></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="item.id">
            <td>
              <input :name="`dsp[${item.id}]`" type="checkbox" v-model="data[index].dsp">
              <input name="id" type="text" :value="slideSelected" hidden>
            </td>
            <td>
              <img :src="`images/slide/${item.img}`" width="200px">
              <input :name="`img[${item.id}]`" type="text" :value="item.img" hidden>
            </td>
            <td>
              <input class="form-control" :name="`title[${item.id}]`" type="text" v-model="data[index].title">
            <td>
              <textarea class="form-control" :name="`info[${item.id}]`" rows="3" v-model="data[index].info"></textarea>
            </td>
            <td>
              <p class="my-3"><button type="submit" class="btn btn-secondary" @click="slideSelected = item.id"><b-icon-arrow-repeat></b-icon-arrow-repeat></button></p>
              <p class="my-3"><button type="button" class="btn btn-danger" @click="delectAlert('DELETE_slide', item.id, deleteSlide)"><b-icon-trash></b-icon-trash></button></p>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import mysql from '../admin/mysql.js'

export default {
  name: 'TableSlide',
  data: () => ({
    data: [],
    slideSelected: 0,
    uploadFile: {
      name: '',
      state: false,
      url: ''
    }
  }),
  created () {
    this.getSlide()
  },
  methods: {
    // Slide Ev
    getSlide () {
      mysql.get('GET_slide').then((res) => {
        this.data = res
      })
    },
    deleteSlide (doItem, id) {
      return mysql.delete(doItem, id)
    },
    patchSlide (e) {
      e.preventDefault()
      const data = new FormData(document.querySelector('#patchSlide'))
      return mysql.patch('PATCH_slide', data).then((res) => {
        if (res) {
          this.trueAlert()
          this.getSlide()
        } else {
          this.errAlert()
        }
      })
    },
    postSlide (e) {
      e.preventDefault()
      const data = new FormData(document.querySelector('#newSlide'))
      mysql.post('POST_slide', data).then((res) => {
        if (res) {
          this.trueAlert()
          this.$bvModal.hide('newSlide_Modal')
          document.querySelector('#newSlide').reset()
          this.uploadFile = this.$options.data().uploadFile
          this.getSlide()
        } else this.errAlert()
      })
    },
    uploadImg (e) {
      this.uploadFile.name = e.target.files[0].name
      this.uploadFile.state = true
      this.uploadFile.url = URL.createObjectURL(e.target.files[0])
    },
    fileReset () {
      this.uploadFile = this.$options.data().uploadFile
    },
    // Alert Ev
    trueAlert () {
      this.$swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    },
    errAlert () {
      this.$swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    },
    // DELETE EV
    delectAlert (doItem, id, fun) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger mr-3'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (!result.value) return false
        // DELETE FUNCTION ||
        const action = fun(doItem, id)
        action.then((res) => {
          if (res) {
            this.$swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              showConfirmButton: false,
              timer: 1500
            })
            this.getSlide()
          } else {
            this.errAlert()
          }
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tableslide{
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

.text-small{
  font-size: .7rem;
}

img.slideImg{
  max-width: 400px;
  height: auto;
}
</style>
