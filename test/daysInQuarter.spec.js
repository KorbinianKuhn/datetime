const datetime = require('./../index');

datetime.addPrototypes();

describe('daysInQuarter functions', () => {
  it('should have num days of first quarter in normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expectedDaysInQuarter = 90;

    expect(datetime.daysInQuarter(date)).toEqual(expectedDaysInQuarter);
    expect(date.daysInQuarter()).toEqual(expectedDaysInQuarter);
    expect(datetime(date).daysInQuarter()).toEqual(expectedDaysInQuarter);
  });

  it('should have num days of first quarter in leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');
    const expectedDaysInQuarter = 91;

    expect(datetime.daysInQuarter(date)).toEqual(expectedDaysInQuarter);
    expect(date.daysInQuarter()).toEqual(expectedDaysInQuarter);
    expect(datetime(date).daysInQuarter()).toEqual(expectedDaysInQuarter);
  });

  it('should have num days of last quarter', () => {
    const date = new Date('2018-12-01T00:00:00.000Z');
    const expectedDaysInQuarter = 92;

    expect(datetime.daysInQuarter(date)).toEqual(expectedDaysInQuarter);
    expect(date.daysInQuarter()).toEqual(expectedDaysInQuarter);
    expect(datetime(date).daysInQuarter()).toEqual(expectedDaysInQuarter);
  });
});
