function removePropertyB(object, propertyName) {

    var prop = propertyName;
    delete object[prop];

    return object;
   }
