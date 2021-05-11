/**
 * @function
 * @description Create a new array from an object with #length
 */
 function toArray(obj) {

    var a = new Array(obj.length)
    
    for (var i=0; i<obj.length; i++)
        a[i] = obj[i]

    return a
}