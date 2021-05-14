/**
 * @function
 * @description Remove a property from a object
 */
 function removePropertyB(object, propertyName) {
    
    var prop = propertyName;
    delete object[prop];
  
    return object;
   }