Array.prototype.myForEach = function (fun) {
  for (let i = 0; i < this.length; i++) {
    fun(this[i], i, this)
  }
}
someArr = [1, 0, 3, 10]
someArr.myForEach(function (element, index, arr) {
  console.log(element, index, arr)
})
