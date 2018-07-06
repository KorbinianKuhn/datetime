const {
  MILLISECONDS_PER_SECOND,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_DAY
} = require("./internal/constants");

exports.differenceInMilliseconds = (dateA, dateB) => {
  return dateA.getTime() - dateB.getTime();
};

exports.differenceInSeconds = (dateA, dateB) => {
  return Math.floor(
    dateA.getTime() - dateB.getTime() / MILLISECONDS_PER_SECOND
  );
};
exports.differenceInMinutes = (dateA, dateB) => {
  return Math.floor(
    dateA.getTime() - dateB.getTime() / MILLISECONDS_PER_MINUTE
  );
};
exports.differenceInHours = (dateA, dateB) => {
  return Math.floor(
    (Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate()) -
      Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate())) /
      MILLISECONDS_PER_HOUR
  );
};
exports.differenceInDays = (dateA, dateB) => {
  return Math.floor(
    (Date.UTC(dateA.getFullYear(), dateA.getMonth(), dateA.getDate()) -
      Date.UTC(dateB.getFullYear(), dateB.getMonth(), dateB.getDate())) /
      MILLISECONDS_PER_DAY
  );
};
exports.differenceInMonths = (dateA, dateB) => {
  return (
    (dateA.getFullYear() - dateB.getFullYear()) * 12 +
    (dateA.getMonth() + 1) -
    dateB.getMonth()
  );
};
exports.differenceInYears = (dateA, dateB) => {
  return dateA.getFullYear() - dateB.getFullYear();
};
