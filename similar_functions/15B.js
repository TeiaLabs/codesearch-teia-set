/**
 * @function
 * @description Save our position so that we can go back and
 * write the byte length of this array at the beginning of
 * the packet (once we have serialized all elements).
 */
 function serializeArray (b, arr) {

  var lengthIndex = b.used;

  b.used += 4; // sizeof long

  var startIndex = b.used;

  var len = arr.length;

  for (var i = 0; i < len; i++) {

    serializeValue(b, arr[i]);

  }

  var endIndex = b.used;

  b.used = lengthIndex;

  serializeInt(b, 4, endIndex - startIndex);

  b.used = endIndex;

}
