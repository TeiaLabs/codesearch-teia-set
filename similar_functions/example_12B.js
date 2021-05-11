/**
 * @function
 * @description Return a random number between bottom (inclusive) and top (inclusive)
 */
 function getRandomizer(bottom, top) {
  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}