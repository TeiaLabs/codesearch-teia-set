
/*
*  Bubble Sort algorithm
*/
function bubbleSort (items) {
  const length = items.length

  for (let i = (length - 1); i > 0; i--) {
    // Number of passes
    for (let j = (length - i); j > 0; j--) {
      // Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        // Swap the numbers
        [items[j], items[j - 1]] = [items[j - 1], items[j]]
      }
    }
  }

  return items
}

/*
*  Implementation of 2 for loops method
*/
const array1 = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation using 2 for loops -')
console.log(array1)
// After Sort
console.log('- After Sort | Implementation using 2 for loops -')
console.log(bubbleSort(array1))
console.log('\n')

/*
*  Bubble Sort algorithm
*/
function alternativeBubbleSort (arr) {
  let swapped = true

  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  }

  return arr
}

/*
*  Implementation of a while loop and a for loop method
*/
const array2 = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation using a while loop and a for loop -')
console.log(array2)
// After Sort
console.log('- After Sort | Implementation using a while loop and a for loop -')
console.log(alternativeBubbleSort(array2))
console.log('\n')
