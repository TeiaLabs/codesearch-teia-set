// Compute the greatest common divisor of two numbers recursively
const gcdOfTwoNumbers = (x, y) => {
  return x === 0 ? y : gcdOfTwoNumbers(y % x, x)
}

// EulersTotientFunction(n) is the count of numbers in {1,2,3,....,n} that are relatively
// prime to n, i.e., the numbers whose GCD (Greatest Common Divisor) with n is 1.
const eulersTotientFunction = (n) => {
  let countOfRelativelyPrimeNumbers = 1
  for (let iterator = 2; iterator <= n; iterator++) {
    if (gcdOfTwoNumbers(iterator, n) === 1) countOfRelativelyPrimeNumbers++
  }
  return countOfRelativelyPrimeNumbers
}

export { eulersTotientFunction }
