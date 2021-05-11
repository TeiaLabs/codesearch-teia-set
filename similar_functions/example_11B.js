/**
 * @function
 * @description Return a random number between bottom (inclusive) and top (exclusive)
 */
 function getRandomizerTopExclusive(bottom, top) {
  result = Math.random() * (top - bottom ) + bottom;
  return result
}