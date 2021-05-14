function serializeLongString (b, string) {
  if (typeof(string) == 'string') {
    var byteLength = Buffer.byteLength(string, 'utf8');
    serializeInt(b, 4, byteLength);
    b.write(string, b.used, 'utf8');
    b.used += byteLength;
  } else if (typeof(string) == 'object') {
    serializeTable(b, string);
  } else {
    // data is Buffer
    var byteLength = string.length;
    serializeInt(b, 4, byteLength);
    b.write(string, b.used); // memcpy
    b.used += byteLength;
  }
}
