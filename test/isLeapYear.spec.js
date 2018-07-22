const moment = require("moment");
const datetime = require('./../index');

datetime.addPrototypes();

describe("isLeapYear functions", () => {
  it('should be normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');

    expect(moment(date).isLeapYear()).toEqual(false);
    expect(datetime.isLeapYear(date)).toEqual(false);
    expect(date.isLeapYear()).toEqual(false);
    expect(datetime(date).isLeapYear()).toEqual(false);
  });

  it('should be leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');

    expect(moment(date).isLeapYear()).toEqual(true);
    expect(datetime.isLeapYear(date)).toEqual(true);
    expect(date.isLeapYear()).toEqual(true);
    expect(datetime(date).isLeapYear()).toEqual(true);
  });
});
