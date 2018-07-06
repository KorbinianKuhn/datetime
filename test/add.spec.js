const moment = require("moment");
const {
  addPrototypes,
  DateTime,
  addMilliseconds,
  addSeconds,
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears
} = require("./../index");

addPrototypes();

describe("add functions", () => {
  const amounts = [0, 1, 5, 40, 100, 500];
  const date = new Date();
  it("addMilliseconds should verify", () => {
    for (const amount of amounts) {
      const expected = moment(new Date(date))
        .add(amount, "milliseconds")
        .toDate()
        .getTime();

      expect(addMilliseconds(new Date(date), amount).getTime()).toEqual(expected);
      expect(new Date(date).addMilliseconds(amount).getTime()).toEqual(expected);
      expect(new DateTime(date).addMilliseconds(amount).getTime()).toEqual(expected);
    }
  });

  it("addSeconds should verify", () => {
    for (const amount of amounts) {
      const expected = moment(new Date(date))
        .add(amount, "seconds")
        .toDate()
        .getTime();

      expect(addSeconds(new Date(date), amount).getTime()).toEqual(expected);
      expect(new Date(date).addSeconds(amount).getTime()).toEqual(expected);
      expect(new DateTime(date).addSeconds(amount).getTime()).toEqual(expected);
    }
  });

  it("addMinutes should verify", () => {
    for (const amount of amounts) {
      const expected = moment(new Date(date))
        .add(amount, "minutes")
        .toDate()
        .getTime();

      expect(addMinutes(new Date(date), amount).getTime()).toEqual(expected);
      expect(new Date(date).addMinutes(amount).getTime()).toEqual(expected);
      expect(new DateTime(date).addMinutes(amount).getTime()).toEqual(expected);
    }
  });

  it("addHours should verify", () => {
    for (const amount of amounts) {
      const expected = moment(new Date(date))
        .add(amount, "hours")
        .toDate()
        .getTime();

      expect(addHours(new Date(date), amount).getTime()).toEqual(expected);
      expect(new Date(date).addHours(amount).getTime()).toEqual(expected);
      expect(new DateTime(date).addHours(amount).getTime()).toEqual(expected);
    }
  });

  it("addDays should verify", () => {
    for (const amount of amounts) {
      const expected = moment(new Date(date))
        .add(amount, "days")
        .toDate()
        .getTime();

      expect(addDays(new Date(date), amount).getTime()).toEqual(expected);
      expect(new Date(date).addDays(amount).getTime()).toEqual(expected);
      expect(new DateTime(date).addDays(amount).getTime()).toEqual(expected);
    }
  });

  it("addMonths should verify", () => {
    for (const amount of amounts) {
      const expected = moment(new Date(date))
        .add(amount, "months")
        .toDate()
        .getTime();

      expect(addMonths(new Date(date), amount).getTime()).toEqual(expected);
      expect(new Date(date).addMonths(amount).getTime()).toEqual(expected);
      expect(new DateTime(date).addMonths(amount).getTime()).toEqual(expected);
    }
  });

  it("addYears should verify", () => {
    for (const amount of amounts) {
      const expected = moment(new Date(date))
        .add(amount, "years")
        .toDate()
        .getTime();

      expect(addYears(new Date(date), amount).getTime()).toEqual(expected);
      expect(new Date(date).addYears(amount).getTime()).toEqual(expected);
      expect(new DateTime(date).addYears(amount).getTime()).toEqual(expected);
    }
  });
});
