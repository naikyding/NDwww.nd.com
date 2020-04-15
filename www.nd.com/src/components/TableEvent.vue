<template >
  <div class="tableEvent mx-5">

    <!-- slide Banner -->
    <table class="table table-hover text-center mt-2" id="landingPageArea">
      <thead class="thead-light">
        <tr>
          <th scope="col">狀態</th>
          <th scope="col">信箱</th>
          <th scope="col">索取時間</th>
          <th scope="col">處理時間</th>
          <th scope="col" > - </th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>
            <select @change="patchEventMail(item.id)" class="text-white" :class="{ 'bg-success': item.state == 1, 'bg-danger': item.state == 0 }">
              <option :selected="item.state == 1">處理完成</option>
              <option :selected="item.state == 0">尚未處理</option>
            </select>
          </td>
          <td class="text-right">
            <span :id="`mail_${item.id}`">{{ item.mail }} </span>
            <b-button variant="outline-primary" @click.stop.prevent="copyEv(item.id)"><b-icon-files></b-icon-files></b-button>
          </td>
          <td>{{ item.date }}</td>
          <td>{{ item.sendDate?item.sendDate:' - ' }}</td>
          <td>
            <p class="my-3"><button type="button" class="btn btn-danger" @click="delectAlert('DELETE_eventMail', item.id, deleteEventMail)"><b-icon-trash></b-icon-trash></button></p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import mysql from '../admin/mysql.js'

export default {
  name: 'TableEvent',
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
    this.getMail()
  },
  methods: {
    // Slide Ev
    getMail () {
      mysql.get('GET_eventMail').then((res) => {
        // console.log(res)
        this.data = res
      })
    },
    deleteEventMail (doItem, id) {
      return mysql.delete(doItem, id)
    },
    patchEventMail (id) {
      mysql.patch('PATCH_eventMail', id).then((res) => {
        if (res) {
          this.trueAlert('已更新狀態')
          this.getMail()
        } else {
          this.errAlert()
        }
      })
    },
    copyEv (id) {
      const item = document.querySelector(`#mail_${id}`)
      // 選取物件文字
      getSelection().selectAllChildren(item)
      // copy
      document.execCommand('copy')
      // 再選取別的空物件->去除選取框
      getSelection().selectAllChildren(document.querySelector('button'))
      this.trueAlert(`已復製 ${item.innerText}`)
    },
    // Alert Ev
    trueAlert (text = 'Your work has been saved') {
      this.$swal.fire({
        icon: 'success',
        title: text,
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
            this.getMail()
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
.tableEvent{
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

select{
  text-align: center;
  text-align-last: center;
  width: 7rem;
  height: 3rem;
  border: 1px solid #ddd;
  background-color: #fff;
}
</style>
