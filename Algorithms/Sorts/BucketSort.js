
// Bucket sort algorithm
function bucketSort (list, size) {
  if (undefined === size) {
    size = 5
  }
  if (list.length === 0) {
    return list
  }
  let min = list[0]
  let max = list[0]
  // find min and max
  for (let iList = 0; iList < list.length; iList++) {
    if (list[iList] < min) {
      min = list[iList]
    } else if (list[iList] > max) {
      max = list[iList]
    }
  }
  // how many buckets we need
  const count = Math.floor((max - min) / size) + 1

  // create buckets
  const buckets = []
  for (let iCount = 0; iCount < count; iCount++) {
    buckets.push([])
  }

  // bucket fill
  for (let iBucket = 0; iBucket < list.length; iBucket++) {
    const key = Math.floor((list[iBucket] - min) / size)
    buckets[key].push(list[iBucket])
  }
  const sorted = []
  // now sort every bucket and merge it to the sorted list
  for (let iBucket = 0; iBucket < buckets.length; iBucket++) {
    const arr = buckets[iBucket].sort()
    for (let iSorted = 0; iSorted < arr.length; iSorted++) {
      sorted.push(arr[iSorted])
    }
  }
  return sorted
}

// Testing
const arrOrignal = [5, 6, 7, 8, 1, 2, 12, 14]
// > bucketSort(arrOrignal)
// [1, 2, 5, 6, 7, 8, 12, 14]
// Array before Sort
console.log(arrOrignal)
const arrSorted = bucketSort(arrOrignal)
// Array after sort
console.log(arrSorted)
