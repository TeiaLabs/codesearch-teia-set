/**
 * @function
 * @description Return a random number between min and max (inclusive)
 */
 function getRandomNumberInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min
}
