<template >
  <div class="tableProduct mx-5">
    <!-- Product Area -->
    <div class="productArea h-100">
      <nav class="mt-2">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link" :class="{ active: select == 'MEN' }" @click="getPorduct" href="javascript:;">MEN</a>
          <a class="nav-item nav-link" :class="{ active: select == 'WOMEN' }" @click="getPorduct" href="javascript:;">WOMEN</a>
          <a class="nav-item nav-link" :class="{ active: select == 'KIDS' }" @click="getPorduct" href="javascript:;">KIDS</a>
        </div>
      </nav>
      <div class="tab-content">
        <!-- Product AREA -->
        <div class="tab-pane fade show active">
          <table class="table table-hover text-center mt-2">
            <thead class="thead-light postion-sticky">
              <th scope="col">主圖</th>
              <th scope="col">名稱</th>
              <th scope="col">類別</th>
              <th scope="col">價錢</th>
              <th scope="col">顏色</th>
              <th scope="col">尺吋</th>
              <th scope="col" ><button class="btn plusBtn" v-b-modal.newProduct_Modal><b-icon-plus></b-icon-plus></button></th>
            </thead>
            <tbody>
              <tr v-for="item in data" :key="item.id">
                <td >
                  <router-link :to="`/products/${select}/${item.title.toLowerCase().split(' ').join('-')}`">
                    <img class="w100px" :src="`images/${select}/${item.img['img1']}`">
                  </router-link>
                </td>
                <td>{{ item.title }}</td>
                <td>{{ item.tag }}</td>
                <td>NT$ {{ item.price }}</td>
                <td>{{ item.color }}</td>
                <td>{{ forInSize(item.size) }}</td>
                <td>
                  <p class="my-3"><button type="button" class="btn btn-secondary" @click="patchItem(item.id)"><b-icon-pencil></b-icon-pencil></button></p>
                  <p class="my-3"><button type="button" class="btn btn-danger" @click="delectAlert('DELETE_product', item.id, deleteProduct)"><b-icon-trash></b-icon-trash></button></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- modal -->
      <b-modal id="newProduct_Modal" size="xl" centered hide-header hide-footer>
        <div class="px-3">
          <form id="newProduct" enctype="multipart/form-data" method="POST" @submit.stop.prevent="postProduct">
            <div class="h3 mb-3 text-center">NEW PRODUCT <span>{{ select }}</span></div>
            <hr>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-6"><!-- left-->
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="productTitle">產品名稱</label>
                      <input type="text" name="table" :value="select" hidden>
                      <input type="text" class="form-control" placeholder="請輸入產品名稱" name="title" id="productTitle" required="required">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="productTag">產品類別</label>
                      <select name="tag" class="form-control" required>
                        <option value="APPAREL">APPAREL</option>
                        <option value="UNDERWEAR">UNDERWEAR</option>
                        <option value="ACTIVEWEAR">ACTIVEWEAR</option>
                        <option value="ACCESSORIES">ACCESSORIES</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="productPrice">產品售價</label>
                    <input type="number" class="form-control" placeholder="請輸入台幣售價" name="sales_price" id="productPrice" required="required">
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-8">
                      <label for="productColor">顏色</label>
                      <select class="form-control" name="color" required="required">
                        <option selected>BLACK</option>
                      </select>
                    </div>
                    <div class="form-group col-md-4">
                    </div>
                  </div>
                  <div class="form-group ">
                    <div class="radio_txt">尺吋</div>
                    <div class="row mb-2">
                      <div class="col ">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_xs" name="XS" value="XS" v-model="form.size.XS">
                          <label class="form-check-label mr-2" for="size_xs">XS</label>
                          <input class="num form-control form-control-sm " :disabled="!form.size.XS" type="number" name="XSnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                      <div class="col d-flex justify-content-end pr-1">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_s" name="S" value="S" v-model="form.size.S">
                          <label class="form-check-label mr-2" for="size_s">S</label>
                          <input class="num form-control form-control-sm" :disabled="!form.size.S" type="number" name="Snum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="col">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_m" name="M" value="M" v-model="form.size.M">
                          <label class="form-check-label mr-3" for="size_m">M</label>
                          <input class="num form-control form-control-sm" :disabled="!form.size.M" type="number" name="Mnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                      <div class="col  d-flex justify-content-end pr-1">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_l" name="L" value="L" v-model="form.size.L">
                          <label class="form-check-label mr-2" for="size_l">L</label>
                          <input class="num form-control form-control-sm" :disabled="!form.size.L" type="number" name="Lnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                    </div>
                    <div class="row mb-2 ">
                      <div class=" col">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_xl" name="XL" value="XL" v-model="form.size.XL">
                          <label class="form-check-label mr-2" for="size_xl">XL</label>
                          <input class="num form-control form-control-sm" :disabled="!form.size.XL" type="number" name="XLnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                      <div class="col d-flex justify-content-end pr-1">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_xxl" name="XXL" value="XXL" v-model="form.size.XXL">
                          <label class="form-check-label mr-2" for="size_xxl">XXL</label>
                          <input class="num form-control form-control-sm" :disabled="!form.size.XXL" type="number"  name="XXLnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- leftEnd -->
                </div>
                <div class="col-12 col-sm-6"><!-- right-->
                  <div class="form-group">
                    <label for="productDetailes">產品說明</label>
                    <textarea class="form-control" type="text" id="productDetailes" name="details" rows="3" required="required"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="productCare">商品成分</label>
                    <textarea class="form-control" id="productCare" name="care" rows="3" type="text"></textarea>
                  </div>
                  <!-- uploadPhoto -->
                  <div class="input-group d-block">
                    <div class="row justify-content-around mx-1">
                      <div class="mx-1" v-for="(item, index) in uploadFile.img" :key="index"><img :src="uploadFile.img[index]" width="100px"></div>
                    </div>
                    <label class="btn btn-secondary w-100 my-2">
                      <input @change="uploadImg" type="file" name="img[]" accept="image/*" hidden multiple="multiple">
                      <i class="fas fa-arrow-circle-up"></i>上傳商品圖片
                    </label>
                    <span v-if="uploadFile.num === 0" class="fzsmall">請選取 3 個檔案</span>
                    <span v-else class="infoTxt fzsmall">已夾帶 {{ uploadFile.num }} 個檔案</span>
                  </div>
                  <!-- contentIn end -->
                </div>
              </div>
            </div>
            <!-- footer Button -->
            <div class="modal-footer justify-content-around mt-2">
              <button type="button" @click="modalHide" class="btn btn-outline-danger">關 閉</button>
              <button type="submit" class="btn btn-lg btn-primary">送 出</button>
              <button type="reset" @click="fileReset" class="btn btn-outline-secondary">重 寫</button>
            </div>
          </form>
        </div>
      </b-modal>

      <!-- EDIT MOMAL -->
      <b-modal id="edit_Product_Modal" size="xl" centered hide-header hide-footer>
        <div class="px-3">
          <form id="editProduct" enctype="multipart/form-data" method="POST" @submit.stop.prevent="patchProduct">
            <div class="h3 mb-3 text-center">EDIT PRODUCT <span>{{ select }}</span></div>
            <hr>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 col-sm-6"><!-- left-->
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="productTitle">產品名稱</label>
                      <input type="text" name="table" :value="select" hidden>
                      <input type="text" name="id" :value="edit.id" hidden>
                      <input type="text" class="form-control" placeholder="請輸入產品名稱" name="title" id="productTitle" required="required" v-model="edit.title">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="productTag">產品類別</label>
                      <select name="tag" class="form-control" required v-model="edit.tag">
                        <option value="APPAREL">APPAREL</option>
                        <option value="UNDERWEAR">UNDERWEAR</option>
                        <option value="ACTIVEWEAR">ACTIVEWEAR</option>
                        <option value="ACCESSORIES">ACCESSORIES</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="productPrice">產品售價</label>
                    <input type="number" class="form-control" placeholder="請輸入台幣售價" name="sales_price" id="productPrice" required="required" v-model="edit.price">
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-8">
                      <label for="productColor">顏色</label>
                      <select class="form-control" name="color" required="required" v-model="edit.color">
                        <option selected>BLACK</option>
                      </select>
                    </div>
                    <div class="form-group col-md-4">
                    </div>
                  </div>
                  <div class="form-group ">
                    <div class="radio_txt">尺吋</div>
                    <div class="row mb-2">
                      <div class="col ">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_xs" name="XS" value="XS" :checked="edit.size.XS">
                          <label class="form-check-label mr-2" for="size_xs">XS</label>
                          <input class="num form-control form-control-sm " :disabled="!edit.size.XS" v-model="edit.size.XS" type="number" name="XSnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                      <div class="col d-flex justify-content-end pr-1">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_s" name="S" value="S" v-model="edit.size.S">
                          <label class="form-check-label mr-2" for="size_s">S</label>
                          <input class="num form-control form-control-sm" :disabled="!edit.size.S" v-model="edit.size.S" type="number" name="Snum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                    </div>
                    <div class="row mb-2">
                      <div class="col">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_m" name="M" value="M" v-model="edit.size.M">
                          <label class="form-check-label mr-3" for="size_m">M</label>
                          <input class="num form-control form-control-sm" :disabled="!edit.size.M" v-model="edit.size.M" type="number" name="Mnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                      <div class="col  d-flex justify-content-end pr-1">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_l" name="L" value="L" v-model="edit.size.L">
                          <label class="form-check-label mr-2" for="size_l">L</label>
                          <input class="num form-control form-control-sm" :disabled="!edit.size.L" v-model="edit.size.L" type="number" name="Lnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                    </div>
                    <div class="row mb-2 ">
                      <div class=" col">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_xl" name="XL" value="XL" v-model="edit.size.XL">
                          <label class="form-check-label mr-2" for="size_xl">XL</label>
                          <input class="num form-control form-control-sm" :disabled="!edit.size.XL" v-model="edit.size.XL" type="number" name="XLnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                      <div class="col d-flex justify-content-end pr-1">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="size_xxl" name="XXL" value="XXL" v-model="edit.size.XXL">
                          <label class="form-check-label mr-2" for="size_xxl">XXL</label>
                          <input class="num form-control form-control-sm" :disabled="!edit.size.XXL" v-model="edit.size.XXL" type="number"  name="XXLnum" placeholder="勾選後輸入庫存量" required="required">
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- leftEnd -->
                </div>
                <div class="col-12 col-sm-6"><!-- right-->
                  <div class="form-group">
                    <label for="productDetailes">產品說明</label>
                    <textarea class="form-control" type="text" id="productDetailes" name="details" rows="3" required="required" v-model="edit.details"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="productCare">商品成分</label>
                    <textarea class="form-control" id="productCare" name="care" rows="3" type="text" v-model="edit.care"></textarea>
                  </div>
                  <!-- uploadPhoto -->
                  <div class="input-group d-block">
                    <div v-if="uploadFile.num === 0" class="row justify-content-around mx-1">
                      <div class="mx-1" v-for="(item, index) in edit.img" :key="index"><img :src="`images/${select}/${item}`" width="100px"></div>
                    </div>
                    <div v-else class="row justify-content-around mx-1">
                      <div class="mx-1" v-for="(item, index) in uploadFile.img" :key="index"><img :src="uploadFile.img[index]" width="100px"></div>
                    </div>
                    <label class="btn btn-secondary w-100 my-2">
                      <input @change="uploadImg" type="file" name="img[]" accept="image/*" hidden multiple="multiple">
                      <i class="fas fa-arrow-circle-up"></i>更新商品圖片
                    </label>
                    <span v-if="uploadFile.num === 0" class="fzsmall">請選取 3 個檔案</span>
                    <span v-else class="infoTxt fzsmall">已夾帶 {{ uploadFile.num }} 個檔案</span>
                  </div>
                  <!-- contentIn end -->
                </div>
              </div>
            </div>
            <!-- footer Button -->
            <div class="modal-footer justify-content-around mt-2">
              <button type="button" @click="modalHide" class="btn btn-outline-danger">關 閉</button>
              <button type="submit" class="btn btn-lg btn-primary">送 出</button>
              <button type="reset" @click="fileReset" class="btn btn-outline-secondary">重 寫</button>
            </div>
          </form>
        </div>
      </b-modal>

    </div>

  </div>
</template>

<script>
import mysql from '../admin/mysql.js'

export default {
  name: 'TableProduct',
  data: () => ({
    data: [],
    select: 'MEN',
    uploadFile: {
      name: '',
      state: false,
      url: '',
      num: 0,
      img: []
    },
    form: {
      title: '',
      size: {
        XS: false,
        S: false,
        M: false,
        L: false,
        XL: false,
        XXL: false
      }
    },
    edit: {
      id: 0,
      title: '',
      size: [],
      img: [],
      price: 0
    }
  }),
  created () {
    this.getTable('MEN')
  },
  methods: {
    showItem (e) {
      this.select = e.target.innerText
    },
    // Product Ev
    getPorduct (e) {
      this.select = e.target.innerText
      this.data = this.$options.data().data
      mysql.get(`GET_product&table=${e.target.innerText}`).then((res) => {
        this.data = res
      })
    },
    getTable (table) {
      mysql.get(`GET_product&table=${table}`).then((res) => {
        this.data = res
        this.select = table
      })
    },
    forInSize (array) {
      let item = ''
      let index
      for (index in array) {
        item += `${index}、`
      }
      return item.substr(0, item.length - 1)
    },
    deleteProduct (doItem, id, table) {
      const data = {
        id,
        table
      }
      return mysql.delete(doItem, data)
    },
    patchItem (id) {
      const editData = this.data.filter(item => item.id === id)
      this.edit = Object.assign({}, editData[0])
      this.$bvModal.show('edit_Product_Modal')
    },
    patchProduct (e) {
      const data = new FormData(document.querySelector('#editProduct'))
      mysql.patch('PATCH_product', data).then((res) => {
        if (res) {
          this.trueAlert()
          this.$bvModal.hide('edit_Product_Modal')
          document.querySelector('#editProduct').reset()
          this.uploadFile = this.$options.data().uploadFile
          this.edit = this.$options.data().edit
          this.getTable(this.select)
        } else this.errAlert()
      })
    },
    postProduct (e) {
      if (this.uploadFile.num < 3) return this.errAlert('請上傳 3 張圖片')
      const data = new FormData(document.querySelector('#newProduct'))
      mysql.post('POST_product', data).then((res) => {
        // console.log(res)
        if (res) {
          this.trueAlert()
          this.$bvModal.hide('newProduct_Modal')
          document.querySelector('#newProduct').reset()
          this.uploadFile = this.$options.data().uploadFile
          this.getTable(this.select)
        } else this.errAlert()
      })
    },
    uploadImg (e) {
      this.uploadFile.num = e.target.files.length
      const imgData = []
      for (let i = 0; i < e.target.files.length; i++) {
        imgData.push(URL.createObjectURL(e.target.files[i]))
      }
      this.uploadFile.img = imgData
    },
    modalHide () {
      this.$bvModal.hide('newProduct_Modal')
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
    errAlert (text = 'Something went wrong!') {
      this.$swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: text
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
        const action = fun(doItem, id, this.select)
        action.then((res) => {
          if (res) {
            this.$swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              showConfirmButton: false,
              timer: 1500
            })
            this.getTable(this.select)
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
.tableProduct{
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

.plusBtn{
  color:#000;
  border:1px solid #C79C57;
}
.plusBtn:hover{
  background-color:#C79C57;
  color:#fff;
}

.w100px{
  width: 100px;
}

.h3 > span{
  color:#C79C57;
}

.fzsmall{
  font-size: .5rem;
}
</style>
