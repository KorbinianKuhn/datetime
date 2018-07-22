const moment = require("moment");
const datetime = require("./../index");

datetime.addPrototypes();

describe("daysInYear functions", () => {
  it("should have num days normal year", () => {
    const date = new Date("2017-02-01T00:00:00.000Z");
    const expectedDaysInYear = 365;

    expect(datetime.daysInYear(date)).toEqual(expectedDaysInYear);
    expect(date.daysInYear()).toEqual(expectedDaysInYear);
    expect(datetime(date).daysInYear()).toEqual(expectedDaysInYear);
  });

  it("should have num days leap year", () => {
    const date = new Date("2016-02-01T00:00:00.000Z");
    const expectedDaysInYear = 366;

    expect(datetime.daysInYear(date)).toEqual(expectedDaysInYear);
    expect(date.daysInYear()).toEqual(expectedDaysInYear);
    expect(datetime(date).daysInYear()).toEqual(expectedDaysInYear);
  });
});
