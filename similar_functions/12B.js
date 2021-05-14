function getRandomNumber(bottom, top) {
  bottom = Math.ceil(bottom);
  top = Math.floor(top);

  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}
