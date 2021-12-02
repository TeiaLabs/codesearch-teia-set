
/*
 * Remove element from array
 */
function removeFromArray(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr
}


/*
 * Remove all occurrences of element from array
 */
function removeAllFromArray(arr, value) {
  var index = arr.indexOf(value);
  while (index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf(value);
  }
}


/*
 * Remove element from array (type safe)
 */
function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}


/*
 * Remove all occurrences of element from array immutably (type safe)
 */
function removeAllItems<T>(arr: Array<T>, value: T): Array<T> {
  return arr.filter(item => item !== value)
}


/*
 * Remove all occurrences of any elements in values from array
 * immutable and type safe
 */
function removeAllItemsFromArray<T>(arr: Array<T>, values: Array<T>): Array<T> {
  return arr.filter(item => !values.includes(item));
}
