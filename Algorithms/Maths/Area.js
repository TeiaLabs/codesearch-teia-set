/*
  Calculate the Surface Area of a Cube.
 */
const surfaceAreaCube = (sideLength) => {
  validateNumericParam(sideLength, 'sideLength')
  return (6.0 * sideLength ** 2.0)
}

/*
  Calculate the Surface Area of a Sphere.
*/
const surfaceAreaSphere = (radius) => {
  validateNumericParam(radius, 'radius')
  return (4.0 * Math.PI * radius ** 2.0)
}

/*
  Calculate the area of a rectangle
*/
const areaRectangle = (length, width) => {
  validateNumericParam(length, 'Length')
  validateNumericParam(width, 'Width')
  return (width * length)
}

/*
  Calculate the area of a square
*/
const areaSquare = (sideLength) => {
  validateNumericParam(sideLength, 'side length')
  return (sideLength ** 2)
}

/*
  Calculate the area of a triangle
*/
const areaTriangle = (base, height) => {
  validateNumericParam(base, 'Base')
  validateNumericParam(height, 'Height')
  return (base * height) / 2.0
}

/*
  Calculate the area of a parallelogram
*/
const areaParallelogram = (base, height) => {
  validateNumericParam(base, 'Base')
  validateNumericParam(height, 'Height')
  return (base * height)
}

/*
  Calculate the area of a trapezium
*/
const areaTrapezium = (base1, base2, height) => {
  validateNumericParam(base1, 'Base One')
  validateNumericParam(base2, 'Base Two')
  validateNumericParam(height, 'Height')
  return 1.0 / 2.0 * (base1 + base2) * height
}

/*
  Calculate the area of a circle
*/
const areaCircle = (radius) => {
  validateNumericParam(radius, 'Radius')
  return (Math.PI * radius ** 2)
}

/*
  Calculate the area of a rhombus
*/
const areaRhombus = (diagonal1, diagonal2) => {
  validateNumericParam(diagonal1, 'diagonal one')
  validateNumericParam(diagonal2, 'diagonal two')
  return (1 / 2 * diagonal1 * diagonal2)
}

const validateNumericParam = (param, paramName = 'param') => {
  if (typeof param !== 'number') {
    throw new TypeError('The ' + paramName + ' should be type Number')
  } else if (param < 0) {
    throw new Error('The ' + paramName + ' only accepts non-negative values')
  }
}

export { surfaceAreaCube, surfaceAreaSphere, areaRectangle, areaSquare, areaTriangle, areaParallelogram, areaTrapezium, areaCircle, areaRhombus }
