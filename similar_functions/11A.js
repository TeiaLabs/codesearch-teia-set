/**
 * @function
 * @description Return a random number between min and max (exclusive)
 */
 function getRandomNumberExclusive(min, max) {
  return Math.random() * (max - min) + min;
}
