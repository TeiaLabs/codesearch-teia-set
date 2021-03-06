/*
 * Build a max heap out of the array
 */
Array.prototype.heapify = function (index, heapSize) {
  let largest = index
  const leftIndex = 2 * index + 1
  const rightIndex = 2 * index + 2

  if (leftIndex < heapSize && this[leftIndex] > this[largest]) {
    largest = leftIndex
  }

  if (rightIndex < heapSize && this[rightIndex] > this[largest]) {
    largest = rightIndex
  }

  if (largest !== index) {
    const temp = this[largest]
    this[largest] = this[index]
    this[index] = temp

    this.heapify(largest, heapSize)
  }
}

// Implementation of heapSort
function heapSort (items) {
  const length = items.length

  for (let i = Math.floor(length / 2) - 1; i > -1; i--) {
    items.heapify(i, length)
  }
  for (let j = length - 1; j > 0; j--) {
    const tmp = items[0]
    items[0] = items[j]
    items[j] = tmp
    items.heapify(0, j)
  }
  return items
}


var ar = [5, 6, 7, 8, 1, 2, 12, 14]
// Array before Sort
console.log(ar)
heapSort(ar)
// Array after sort
console.log(ar)
