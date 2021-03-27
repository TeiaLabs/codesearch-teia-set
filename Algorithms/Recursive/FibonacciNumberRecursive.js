//  Fibonacci sequence (Recursive), such that each number is the sum of the two preceding ones, starting from 0 and 1.
const fibonacci = (N) => {
  if (N === 0 || N === 1) return N

  return fibonacci(N - 2) + fibonacci(N - 1)
}

// testing
(() => {
  const number = 5
  console.log(number + 'th Fibonacci number is ' + fibonacci(number))
})()
