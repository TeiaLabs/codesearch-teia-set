
// Function to reverse a string - Iterative
function ReverseStringIterative (string) {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }
  let reversedString = ''
  let index

  for (index = string.length - 1; index >= 0; index--) {
    reversedString += string[index]
  }

  return reversedString
}

// Function to reverse a string - Iterative Inplace
function ReverseStringIterativeInplace (string) { 
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }
  const _string = string.split('')

  for (let i = 0; i < Math.floor(_string.length / 2); i++) {
    const first = _string[i]
    const second = _string[_string.length - 1 - i]
    _string[i] = second
    _string[_string.length - 1 - i] = first
  }

  return _string.join('')
}

export { ReverseStringIterative, ReverseStringIterativeInplace }
