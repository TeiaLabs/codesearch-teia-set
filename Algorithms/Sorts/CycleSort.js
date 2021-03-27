/**
* Implementation of Cycle Sort
*/
function cycleSort (list) {
  let writes = 0
  for (let cycleStart = 0; cycleStart < list.length; cycleStart++) {
    let value = list[cycleStart]
    let position = cycleStart

    // search position
    for (let i = cycleStart + 1; i < list.length; i++) {
      if (list[i] < value) {
        position++
      }
    }
    // if its the same continue
    if (position === cycleStart) {
      continue
    }

    while (value === list[position]) {
      position++
    }

    const oldValue = list[position]
    list[position] = value
    value = oldValue
    writes++

    // rotate the rest
    while (position !== cycleStart) {
      position = cycleStart
      for (let i = cycleStart + 1; i < list.length; i++) {
        if (list[i] < value) {
          position++
        }
      }
      while (value === list[position]) {
        position++
      }
      const oldValueCycle = list[position]
      list[position] = value
      value = oldValueCycle
      writes++
    }
  }
  return writes
}


const array = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation of Cycle Sort -')
console.log(array)
// After Sort
console.log('- After Sort | Implementation of Cycle Sort -')
console.log(cycleSort(array))
console.log('\n')
