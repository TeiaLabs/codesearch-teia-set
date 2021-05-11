/**
 * @function
 * @description Merge properties of two objects
 */
 function MergeObjectsAttributes(dst, src) {

  for (var i in src) {
    try{ 
      dst[i] = src[i] } catch(e) {}
    }  
    return dst;
  }