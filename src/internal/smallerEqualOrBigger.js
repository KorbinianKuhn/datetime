exports.smallerEqualOrBigger = (a, b) => {
  const diff = a - b;
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
}