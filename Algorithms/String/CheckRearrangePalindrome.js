/**
  * Check if string is a palindrome
  **/

const palindromeRearranging = (str) => {
  // check that input is a string
  if (typeof str !== 'string') {
    return 'Not a string'
  }
  // Check if is a empty string
  if (str.length === 0) {
    return 'Empty string'
  }

  // First obtain the character count for each character in the string and store it in an object.
  // Filter the object's values to only the odd character counts.
  const charCounts = [...str].reduce((counts, char) => {
    counts[char] = counts[char] ? counts[char] + 1 : 1
    return counts
  }, {})
  // If the length of the resulting array is 0 or 1, the string can be a palindrome.
  return Object.values(charCounts).filter(count => count % 2 !== 0).length <= 1
}

// testing
console.log(palindromeRearranging('aaeccrr')) // true
console.log(palindromeRearranging('leve')) // false
