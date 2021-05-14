/**
 * @function
 * @description Create a new array from an object with #length
 */
 function toArray(obj) {

    length = obj.length
    var box = new Array(length)
    
    for (var j=0; j<length; j++)
        box[j] = obj[j]

    return box
}