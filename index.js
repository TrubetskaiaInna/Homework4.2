Array.prototype.myForEach = function (fun) {
  for (let i = 0; i < this.length; i++) {
    fun(this[i], i, this)
  }
}
someArr = [1, 0, 3, 1, -2, 10]
someArr.myForEach(function (element, index, arr) {
  console.log('element', element, 'index', index, arr)
})

Array.prototype.myMap = function (fun) {
  const arrResult = []
  for (let i = 0; i < this.length; i++) {
    arrResult.push(fun(this[i], i, this))
  }
  return arrResult
}

const arrTest = someArr.myMap(element => element * 2)
console.log('modified array', arrTest)

Array.prototype.mySort = function (fun) {
  if (fun) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (fun(this[j], this[j + 1]) === 1) {
          const element = this[j]
          this[j] = this[j + 1]
          this[j + 1] = element
        }
      }
    }
  } else {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if ((this[j].toString() > this[j + 1].toString())) {
          const element = this[j]
          this[j] = this[j + 1]
          this[j + 1] = element
        }
      }
    }
  }
  return this
}

someArr.mySort()
console.log('sorted array', someArr)

function sortCondition (a, b) {
  if (a < b)
    return 1
  if (a > b)
    return -1
  if (a === b)
    return 0
}

someArr.mySort(sortCondition)
console.log('sorted array by function', someArr)
