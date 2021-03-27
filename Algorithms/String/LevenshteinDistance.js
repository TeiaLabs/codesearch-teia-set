/* Implementation of Levenshtein distance 
*/
const levenshteinDistance = (a, b) => {
  // Declaring array 'D' with rows = len(a) + 1 and columns = len(b) + 1:
  const distanceMatrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null))

  // Initialising first column:
  for (let i = 0; i <= a.length; i += 1) {
    distanceMatrix[0][i] = i
  }

  // Initialising first row:
  for (let j = 0; j <= b.length; j += 1) {
    distanceMatrix[j][0] = j
  }

  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1
      // choosing the minimum of all three, vis-a-vis:
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1, // deletion
        distanceMatrix[j - 1][i] + 1, // insertion
        distanceMatrix[j - 1][i - 1] + indicator // substitution
      )
    }
  }

  console.log(
    'Levenshtein Distance between ' +
            a +
            ' and ' +
            b +
            ' is = ' +
            distanceMatrix[b.length][a.length]
  )
  return distanceMatrix[b.length][a.length]
}

export { levenshteinDistance }
