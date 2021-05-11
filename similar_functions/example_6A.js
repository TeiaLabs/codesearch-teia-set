/**
 * @function
 * @description Find and replace all occurrences of a string
 */
 function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
 }