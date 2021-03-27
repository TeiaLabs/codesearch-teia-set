/**
 * Comb sort improves on bubble sort.
 */

function combSort (list) {
  if (list.length === 0) {
    return list
  }
  const shrink = 1.3
  let gap = list.length
  let isSwapped = true
  let i = 0

  while (gap > 1 || isSwapped) {
    // Update the gap value for a next comb
    gap = parseInt(parseFloat(gap) / shrink, 10)

    isSwapped = false
    i = 0

    while (gap + i < list.length) {
      if (list[i] > list[i + gap]) {
        [list[i], list[i + gap]] = [list[i + gap], list[i]]
        isSwapped = true
      }
      i += 1
    }
  }
  return list
}

const array = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation of Comb Sort -')
console.log(array)
// After Sort
console.log('- After Sort | Implementation of Comb Sort -')
console.log(combSort(array))
console.log('\n')
