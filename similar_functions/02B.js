/**
 * @function
 * @description Remove all occurrences of a specific item from an array
 */
function removeAllInstances(arr, item) {
  for (var i = arr.length; i--;) {
    if (arr[i] === item) arr.splice(i, 1);
  }
  return arr;
}