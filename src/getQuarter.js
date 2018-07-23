exports.getQuarter = date => {
  return Math.floor(date.getMonth() / 3) + 1;
};
