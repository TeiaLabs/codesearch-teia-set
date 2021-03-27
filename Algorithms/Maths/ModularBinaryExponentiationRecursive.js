/*
  Exponentiation by squaring binary values
*/
const modularBinaryExponentiation = (a, n, m) => {
  // input: a: int, n: int, m: int
  // returns: (a^n) % m: int
  if (n === 0) {
    return 1
  } else if (n % 2 === 1) {
    return (modularBinaryExponentiation(a, n - 1, m) * a) % m
  } else {
    const b = modularBinaryExponentiation(a, n / 2, m)
    return (b * b) % m
  }
}

export { modularBinaryExponentiation }
