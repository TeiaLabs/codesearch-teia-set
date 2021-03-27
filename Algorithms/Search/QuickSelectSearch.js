/*
 * Quick select search
 */
function quickSelectSearch (array, k) {
  if (!array || array.length <= k) {
    throw new Error('Invalid arguments')
  }

  let from = 0
  let to = array.length - 1
  while (from < to) {
    let left = from
    let right = to
    const pivot = array[Math.ceil((left + right) * 0.5)]

    while (left < right) {
      if (array[left] >= pivot) {
        const tmp = array[left]
        array[left] = array[right]
        array[right] = tmp
        --right
      } else {
        ++left
      }
    }

    if (array[left] > pivot) {
      --left
    }

    if (k <= left) {
      to = left
    } else {
      from = left + 1
    }
  }
  return array
}

/* ---------------------------------- Test ---------------------------------- */

const arr = [1121111, 21, 333, 41, 5, 66, 7777, 28, 19, 11110]
console.log(quickSelectSearch(arr, 5)) // [ 19, 21, 28, 41, 5, 66, 333, 11110, 1121111, 7777 ]
console.log(quickSelectSearch(arr, 2)) // [ 19, 5, 21, 41, 28, 333, 11110, 1121111, 7777, 66 ]
console.log(quickSelectSearch(arr, 7)) // [ 19, 5, 21, 41, 28, 66, 333, 7777, 11110, 1121111 ]
