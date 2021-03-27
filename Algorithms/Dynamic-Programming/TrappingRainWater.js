/* 
Trapping Rain Water
Given n non-negative integers representing an elevation map where
the width of each bar is 1, compute how much water it is able to trap
after raining.
*/

function trap (heights) {
  const maxes = new Array(heights.length).fill(0)

  let leftMax = 0
  for (let i = 0; i < heights.length; i++) {
    const height = heights[i]
    maxes[i] = leftMax
    leftMax = Math.max(leftMax, height)
  }

  let rightMax = 0
  for (let i = heights.length - 1; i >= 0; i -= 1) {
    const height = heights[i]
    const minHeight = Math.min(rightMax, maxes[i])

    if (height < minHeight) {
      maxes[i] = minHeight - height
    } else {
      maxes[i] = 0
    }
    rightMax = Math.max(rightMax, height)
  }
  return maxes.reduce((a, b) => a + b, 0)
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // -> 6
