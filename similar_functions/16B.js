/**
 * @function
 * @description Parse Network Byte Order integers. size can be 1,2,4,8
 */
  function parseInt(buffer, size) {
  if (size==1)
      return buffer[buffer.read++];

  else if (size==2)
      return (buffer[buffer.read++] << 8) + buffer[buffer.read++];

  else if (size==4)
      return (buffer[buffer.read++] << 24) + (buffer[buffer.read++] << 16) +
             (buffer[buffer.read++] << 8)  + buffer[buffer.read++];

  else if (size==8)
      return (buffer[buffer.read++] << 56) + (buffer[buffer.read++] << 48) +
             (buffer[buffer.read++] << 40) + (buffer[buffer.read++] << 32) +
             (buffer[buffer.read++] << 24) + (buffer[buffer.read++] << 16) +
             (buffer[buffer.read++] << 8)  + buffer[buffer.read++];

  else
      throw new Error("cannot parse ints of that size");

}
