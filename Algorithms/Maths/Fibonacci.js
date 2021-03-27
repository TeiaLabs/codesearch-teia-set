const list = []

//  Fibonacci sequence (Iterative), such that each number is the sum of the two preceding ones, starting from 0 and 1.
const FibonacciIterative = (nth) => {
  const sequence = []

  if (nth >= 1) sequence.push(1)
  if (nth >= 2) sequence.push(1)

  for (let i = 2; i < nth; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2])
  }

  return sequence
}

//  Fibonacci sequence (Recursive), such that each number is the sum of the two preceding ones, starting from 0 and 1.
const FibonacciRecursive = (number) => {
  return (() => {
    switch (list.length) {
      case 0:
        list.push(1)
        return FibonacciRecursive(number)
      case 1:
        list.push(1)
        return FibonacciRecursive(number)
      case number:
        return list
      default:
        list.push(list[list.length - 1] + list[list.length - 2])
        return FibonacciRecursive(number)
    }
  })()
}

const dict = new Map()

//  Fibonacci sequence (Recursive DP), such that each number is the sum of the two preceding ones, starting from 0 and 1.
const FibonacciRecursiveDP = (stairs) => {
  if (stairs <= 0) return 0
  if (stairs === 1) return 1

  // Memoize stair count
  if (dict.has(stairs)) return dict.get(stairs)

  const res =
    FibonacciRecursiveDP(stairs - 1) + FibonacciRecursiveDP(stairs - 2)

  dict.set(stairs, res)

  return res
}

//  Fibonacci sequence (Iterative DP), such that each number is the sum of the two preceding ones, starting from 0 and 1.
const FibonacciDpWithoutRecursion = (number) => {
  const table = []
  table.push(1)
  table.push(1)
  for (var i = 2; i < number; ++i) {
    table.push(table[i - 1] + table[i - 2])
  }
  return table
}

// Using Matrix exponentiation to find n-th fibonacci in O(log n) time
const copyMatrix = (A) => {
  return A.map(row => row.map(cell => cell))
}

const Identity = (size) => {
  const I = Array(size).fill(null).map(() => Array(size).fill())
  return I.map((row, rowIdx) => row.map((_col, colIdx) => {
    return rowIdx === colIdx ? 1 : 0
  }))
}

// Multiply of matrices 
const matrixMultiply = (A, B) => {
  A = copyMatrix(A)
  B = copyMatrix(B)
  const l = A.length
  const m = B.length
  const n = B[0].length // Assuming non-empty matrices
  const C = Array(l).fill(null).map(() => Array(n).fill())
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < n; j++) {
      C[i][j] = 0
      for (let k = 0; k < m; k++) {
        C[i][j] += A[i][k] * B[k][j]
      }
    }
  }
  return C
}

/**
 * Computes A raised to the power n i.e. pow(A, n) where A is a square matrix
 * @param {*} A the square matrix
 * @param {*} n the exponent
 */
// square matrix
const matrixExpo = (A, n) => {
  A = copyMatrix(A)

  // Just like Binary exponentiation mentioned in ./BinaryExponentiationIterative.js
  let result = Identity(A.length) // Identity matrix
  while (n > 0) {
    if (n % 2 !== 0) result = matrixMultiply(result, A)
    n = Math.floor(n / 2)
    if (n > 0) A = matrixMultiply(A, A)
  }
  return result
}

const FibonacciMatrixExpo = (n) => {
  // F(0) = 0, F(1) = 1
  // F(n) = F(n-1) + F(n-2)
  // Consider below matrix multiplication:

  // | F(n) |   |1  1|   |F(n-1)|
  // |      | = |    | * |      |
  // |F(n-1)|   |1  0|   |F(n-2)|

  // Let's rewrite it as F(n, n-1) = A * F(n-1, n-2)
  // or                  F(n, n-1) = A * A * F(n-2, n-3)
  // or                  F(n, n-1) = pow(A, n-1) * F(1, 0)

  if (n === 0) return 0

  const A = [
    [1, 1],
    [1, 0]
  ]
  const poweredA = matrixExpo(A, n - 1) // A raised to the power n-1
  let F = [
    [1],
    [0]
  ]
  F = matrixMultiply(poweredA, F)
  return F[0][0]
}

export { FibonacciDpWithoutRecursion }
export { FibonacciIterative }
export { FibonacciRecursive }
export { FibonacciRecursiveDP }
export { FibonacciMatrixExpo }
