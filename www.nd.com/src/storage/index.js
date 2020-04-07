// localStorage EV
const storage = {
  get (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  set (key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  },
  remove (key) {
    localStorage.removeItem(key)
  },
  removeItem (keyName, index) {
    const orderCartData = this.get(keyName)
    orderCartData.splice(index, 1)
    this.set(keyName, orderCartData)
  }
}

export default storage
