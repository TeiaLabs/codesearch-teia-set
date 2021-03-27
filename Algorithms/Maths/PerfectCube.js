/**
 * Check if the cube is symmetric
 */
const perfectCube = (num) => Math.round(num ** (1 / 3)) ** 3 === num

export { perfectCube }
