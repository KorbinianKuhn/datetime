exports.isSame = (dateA, dateB) => {
  return dateA.getTime() === dateB.getTime();
};

exports.isSameMillisecond = (dateA, dateB) => {
  return dateA.getTime() === dateB.getTime();
};

exports.isSameSecond = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours() &&
    dateA.getMinutes() === dateB.getMinutes() &&
    dateA.getSeconds() === dateB.getSeconds()
  );
};

exports.isSameMinute = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours() &&
    dateA.getMinutes() === dateB.getMinutes()
  );
};

exports.isSameHour = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getHours() === dateB.getHours()
  );
};

exports.isSameDay = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()
  );
};

exports.isSameMonth = (dateA, dateB) => {
  return (
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth()
  );
};

exports.isSameYear = (dateA, dateB) => {
  return dateA.getFullYear() === dateB.getFullYear();
};
