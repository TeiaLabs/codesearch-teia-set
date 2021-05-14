function toArray(obj) {

    length = obj.length
    var box = new Array(length)

    for (var j=0; j<length; j++)
        box[j] = obj[j]

    return box
}
