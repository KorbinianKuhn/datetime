const moment = require("moment");
const {
  subtractMilliseconds,
  subtractSeconds,
  subtractMinutes,
  subtractHours,
  subtractDays,
  subtractMonths,
  subtractYears
} = require("./../index");

describe("subtract functions", () => {
  const amounts = [0, 1, 5, 40, 100, 500];
  const date = new Date();
  it("subtractMilliseconds should verify", () => {
    for (const amount of amounts) {
      expect(subtractMilliseconds(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .subtract(amount, "milliseconds")
          .toDate()
          .getTime()
      );
    }
  });

  it("subtractSeconds should verify", () => {
    for (const amount of amounts) {
      expect(subtractSeconds(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .subtract(amount, "seconds")
          .toDate()
          .getTime()
      );
    }
  });

  it("subtractMinutes should verify", () => {
    for (const amount of amounts) {
      expect(subtractMinutes(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .subtract(amount, "minutes")
          .toDate()
          .getTime()
      );
    }
  });

  it("subtractHours should verify", () => {
    for (const amount of amounts) {
      expect(subtractHours(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .subtract(amount, "hours")
          .toDate()
          .getTime()
      );
    }
  });

  it("subtractDays should verify", () => {
    for (const amount of amounts) {
      expect(subtractDays(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .subtract(amount, "days")
          .toDate()
          .getTime()
      );
    }
  });

  it("subtractMonths should verify", () => {
    for (const amount of amounts) {
      expect(subtractMonths(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .subtract(amount, "months")
          .toDate()
          .getTime()
      );
    }
  });

  it("subtractYears should verify", () => {
    for (const amount of amounts) {
      expect(subtractYears(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .subtract(amount, "years")
          .toDate()
          .getTime()
      );
    }
  });
});
