exports.startOfSecond = date => {
  date.setMilliseconds(0);
  return date;
};

exports.startOfMinute = date => {
  date.setSeconds(0, 0);
  return date;
};

exports.startOfHour = date => {
  date.setMinutes(0, 0, 0);
  return date;
};

exports.startOfDay = date => {
  date.setHours(0, 0, 0, 0);
  return date;
};

exports.startOfMonth = date => {
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  return date;
};

exports.startOfYear = date => {
  date.setHours(0, 0, 0, 0);
  date.setDate(1);
  date.setMonth(0);
  return date;
};
