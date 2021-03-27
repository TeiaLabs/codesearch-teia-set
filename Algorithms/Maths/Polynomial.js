/**
 * Constructs the polynomial using Array as an argument.
 */
class Polynomial {
  constructor (array) {
    this.coefficientArray = array // array of coefficients
    this.polynomial = '' // in terms of x e.g. (2x) + (1)
    this.construct()
  }

  /**
   * Construct the polynomial in terms of x using the coefficientArray
   */
  construct () {
    this.polynomial = this.coefficientArray
      .map((coefficient, exponent) => {
        if (coefficient === 0) {
          return '0'
        }
        if (exponent === 0) {
          return `(${coefficient})`
        } else if (exponent === 1) {
          return `(${coefficient}x)`
        } else {
          return `(${coefficient}x^${exponent})`
        }
      })
      .filter((x) => {
        if (x !== '0') {
          return x
        }
      })
      .reverse()
      .join(' + ')
  }

  /**
   * Function to display polynomial in terms of x
   * @returns {String} of polynomial representation in terms of x
   */
  display () {
    return this.polynomial
  }

  /**
   * Function to calculate the value of the polynomial by substituting variable x
   * @param {Number} value
   */
  evaluate (value) {
    return this.coefficientArray.reduce((result, coefficient, exponent) => {
      return result + coefficient * Math.pow(value, exponent)
    }, 0)
  }
}

export { Polynomial }
