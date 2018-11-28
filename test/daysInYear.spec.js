const datetime = require('./../dist');

describe('daysInYear()', () => {
  it('should have num days normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expectedDaysInYear = 365;

    expect(datetime(date).daysInYear()).toEqual(expectedDaysInYear);
  });

  it('should have num days leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');
    const expectedDaysInYear = 366;

    expect(datetime(date).daysInYear()).toEqual(expectedDaysInYear);
  });
});
