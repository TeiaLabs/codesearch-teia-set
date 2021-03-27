// function to find factorial using recursion

const factorial = (n) => {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

// testing
console.log(factorial(4))
console.log(factorial(15))
console.log(factorial(0))
