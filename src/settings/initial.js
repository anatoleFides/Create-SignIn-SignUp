Object. assign(Object, {
  compare (target, source) {
    return Object.keys(target)
      .filter(key => target[key] === source[key])
      .length === Object.keys(target).length
  }
})

Object.assign(Object.prototype, {
  compareWith (object) {
    return Object.compare(this, object)
  }
})

Object.assign(Storage.prototype, {
  setObject (key, value) {
    this.setItem(key, JSON.stringify(value))
  },
  getObgect (key) {
    return JSON.parse(this.getItem(key))
  }
})
