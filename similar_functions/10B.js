function MergeObjectsAttributes(dst, src) {

  for (var i in src) {
  	dst[i] = src[i]
  }
    return dst;
}
