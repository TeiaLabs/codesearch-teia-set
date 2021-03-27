
// Exponentiation by squaring
const exponent = (x, n) => {
  let ans = 1
  while (n > 0) {
    if (n % 2 !== 0) ans *= x
    n = Math.floor(n / 2)
    if (n > 0) x *= x
  }
  return ans
}

export { exponent }
