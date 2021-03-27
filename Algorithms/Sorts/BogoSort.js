/*
 * Check if the array is sorted in ascending order
 */
Array.prototype.isSorted = function () {
  const length = this.length
  for (let i = 0; i < length - 1; i++) {
    if (this[i] > this[i + 1]) {
      return false
    }
  }
  return true
}

/*
 * Function to shuffle the array randomly in place.
 */
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i; i--) {
    const m = Math.floor(Math.random() * i)
    const n = this[i - 1]
    this[i - 1] = this[m]
    this[m] = n
  }
}

/*
 * Implementation of the bogosort algorithm
 */
function bogoSort (items) {
  while (!items.isSorted()) {
    items.shuffle()
  }
  return items
}


const ar = [5, 6, 7, 8, 1, 2, 12, 14]
// Array before Sort
console.log(ar)
bogoSort(ar)
// Array after sort
console.log(ar)
