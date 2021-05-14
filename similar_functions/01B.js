/**
 * @function
 * @description Remove the first occurrence of a specific item from an array
 */
 function removeItemOnce(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        return arr
      }
    }
  }