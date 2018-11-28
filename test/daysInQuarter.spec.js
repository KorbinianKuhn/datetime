const datetime = require('./../dist');

describe('daysInQuarter()', () => {
  it('should have num days of first quarter in normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expectedDaysInQuarter = 90;

    expect(datetime(date).daysInQuarter()).toEqual(expectedDaysInQuarter);
  });

  it('should have num days of first quarter in leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');
    const expectedDaysInQuarter = 91;

    expect(datetime(date).daysInQuarter()).toEqual(expectedDaysInQuarter);
  });

  it('should have num days of last quarter', () => {
    const date = new Date('2018-12-01T00:00:00.000Z');
    const expectedDaysInQuarter = 92;

    expect(datetime(date).daysInQuarter()).toEqual(expectedDaysInQuarter);
  });
});
