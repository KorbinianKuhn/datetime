const moment = require("moment");
const {
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears
} = require("./../index");

describe("add functions", () => {
  const amounts = [0, 1, 5, 40, 100, 500];
  const date = new Date();
  it("addMilliseconds should verify", () => {
    for (const amount of amounts) {
      expect(addMilliseconds(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .add(amount, "milliseconds")
          .toDate()
          .getTime()
      );
    }
  });

  it("addSeconds should verify", () => {
    for (const amount of amounts) {
      expect(addSeconds(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .add(amount, "seconds")
          .toDate()
          .getTime()
      );
    }
  });

  it("addMinutes should verify", () => {
    for (const amount of amounts) {
      expect(addMinutes(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .add(amount, "minutes")
          .toDate()
          .getTime()
      );
    }
  });

  it("addHours should verify", () => {
    for (const amount of amounts) {
      expect(addHours(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .add(amount, "hours")
          .toDate()
          .getTime()
      );
    }
  });

  it("addDays should verify", () => {
    for (const amount of amounts) {
      expect(addDays(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .add(amount, "days")
          .toDate()
          .getTime()
      );
    }
  });

  it("addMonths should verify", () => {
    for (const amount of amounts) {
      expect(addMonths(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .add(amount, "months")
          .toDate()
          .getTime()
      );
    }
  });

  it("addYears should verify", () => {
    for (const amount of amounts) {
      expect(addYears(new Date(date), amount).getTime()).toEqual(
        moment(new Date(date))
          .add(amount, "years")
          .toDate()
          .getTime()
      );
    }
  });
});
