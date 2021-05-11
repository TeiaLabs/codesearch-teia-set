/**
 * @function
 * @description Create a new array from an object with #length
 */
 function toArray(obj) {

    length = obj.length
    var a = new Array(length)
    
    for (var j=0; j<length; j++)
        a[j] = obj[j]

    return a
}