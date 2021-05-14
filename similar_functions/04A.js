/**
 * @function
 * @description Remove a property from a object
 */
 function removeProperty(object, property) {
  
  delete object[property];

  return object;
 }