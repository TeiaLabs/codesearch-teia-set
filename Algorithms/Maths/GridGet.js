// Find x given the element and columns for a 2 dimensional array.
const gridGetX = (columns, index) => {
  while (index + 1 > columns) {
    index = index - columns
  }
  return index + 1
}

// Find y given the element and columns for a 2 dimensional array.
const gridGetY = (columns, index) => {
  return Math.floor(index / columns) + 1
}

export { gridGetX, gridGetY }
