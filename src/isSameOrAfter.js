exports.isSameOrAfter = (dateA, dateB) => {
  return dateA.getTime() >= dateB.getTime();
};

exports.isSameOrAfterMillisecond = (dateA, dateB) => {
  return dateA.getTime() >= dateB.getTime();
};

exports.isSameOrAfterSecond = (dateA, dateB) => {
  return (
    dateA.getFullYear() >= dateB.getFullYear() &&
    dateA.getMonth() >= dateB.getMonth() &&
    dateA.getDate() >= dateB.getDate() &&
    dateA.getHours() >= dateB.getHours() &&
    dateA.getMinutes() >= dateB.getMinutes() &&
    dateA.getSeconds() >= dateB.getSeconds()
  );
};

exports.isSameOrAfterMinute = (dateA, dateB) => {
  return (
    dateA.getFullYear() >= dateB.getFullYear() &&
    dateA.getMonth() >= dateB.getMonth() &&
    dateA.getDate() >= dateB.getDate() &&
    dateA.getHours() >= dateB.getHours() &&
    dateA.getMinutes() >= dateB.getMinutes()
  );
};

exports.isSameOrAfterHour = (dateA, dateB) => {
  return (
    dateA.getFullYear() >= dateB.getFullYear() &&
    dateA.getMonth() >= dateB.getMonth() &&
    dateA.getDate() >= dateB.getDate() &&
    dateA.getHours() >= dateB.getHours()
  );
};

exports.isSameOrAfterDay = (dateA, dateB) => {
  return (
    dateA.getFullYear() >= dateB.getFullYear() &&
    dateA.getMonth() >= dateB.getMonth() &&
    dateA.getDate() >= dateB.getDate()
  );
};

exports.isSameOrAfterMonth = (dateA, dateB) => {
  return (
    dateA.getFullYear() >= dateB.getFullYear() &&
    dateA.getMonth() >= dateB.getMonth()
  );
};

exports.isSameOrAfterYear = (dateA, dateB) => {
  return dateA.getFullYear() >= dateB.getFullYear();
};
