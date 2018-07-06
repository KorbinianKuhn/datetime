exports.isAfter = (dateA, dateB) => {
  return dateA.getTime() === dateB.getTime();
};

exports.isAfterMillisecond = (dateA, dateB) => {
  return dateA.getTime() === dateB.getTime();
};

exports.isAfterSecond = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours() &&
    dateA.getMinutes() === dateB.getMinutes() &&
    dateA.getSeconds() === dateB.getSeconds()
  );
};

exports.isAfterMinute = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours() &&
    dateA.getMinutes() === dateB.getMinutes()
  );
};

exports.isAfterHour = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours()
  );
};

exports.isAfterDay = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
};

exports.isAfterMonth = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth()
  );
};

exports.isAfterYear = (dateA, dateB) => {
  return dateA.getFullYear() === dateB.getFullYear();
};
