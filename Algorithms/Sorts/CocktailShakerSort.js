/*
 * Cocktail Shaker Sort algorithm 
 */
function cocktailShakerSort (items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j

    // Backwards
    for (j = items.length - 1; j > i; j--) {
      if (items[j] < items[j - 1]) {
        [items[j], items[j - 1]] = [items[j - 1], items[j]]
      }
    }

    // Forwards
    for (j = 0; j < i; j++) {
      if (items[j] > items[j + 1]) {
        [items[j], items[j + 1]] = [items[j + 1], items[j]]
      }
    }
  }

  return items
}


const array = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation of Cocktail Shaker Sort -')
console.log(array)
// After Sort
console.log('- After Sort | Implementation of Cocktail Shaker Sort -')
console.log(cocktailShakerSort(array))
console.log('\n')
