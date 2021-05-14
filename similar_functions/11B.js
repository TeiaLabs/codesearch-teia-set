/**
 * @function
 * @description Return a random number between bottom and top (exclusive)
 */
 function getRandomizerNumberExclusive(min, max) {
  return Math.random() * (max - min) + min
}
