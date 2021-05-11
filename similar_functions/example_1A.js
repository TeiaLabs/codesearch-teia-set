/**
 * @function
 * @description Remove the first occurrence of a specific item from an array
 */
 function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }