const moment = require('moment');
const datetime = require('./../dist');

describe('daysInMonth()', () => {
  it('should have num days of februar in normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expectedDaysInMonth = 28;

    expect(moment(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('should have num days of februar in leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');
    const expectedDaysInMonth = 29;

    expect(moment(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('should have num days of long month', () => {
    const date = new Date('2018-12-01T00:00:00.000Z');
    const expectedDaysInMonth = 31;

    expect(moment(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('should have num days of short month', () => {
    const date = new Date('2018-11-01T00:00:00.000Z');
    const expectedDaysInMonth = 30;

    expect(moment(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('utc: should have num days of februar in normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expectedDaysInMonth = 28;

    expect(moment.utc(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime.utc(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('utc: should have num days of februar in leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');
    const expectedDaysInMonth = 29;

    expect(moment.utc(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime.utc(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('utc: should have num days of long month', () => {
    const date = new Date('2018-12-01T00:00:00.000Z');
    const expectedDaysInMonth = 31;

    expect(moment.utc(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime.utc(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  it('utc: should have num days of short month', () => {
    const date = new Date('2018-11-01T00:00:00.000Z');
    const expectedDaysInMonth = 30;

    expect(moment.utc(date).daysInMonth()).toEqual(expectedDaysInMonth);
    expect(datetime.utc(date).daysInMonth()).toEqual(expectedDaysInMonth);
  });

  const dates = [
    new Date('2017-01-01T00:00:00.000Z'),
    new Date('2017-05-26T21:21:34.381Z'),
    new Date('2018-01-01T00:00:00.000Z'),
    new Date('2018-01-01T23:00:00.000Z'),
    new Date('2019-01-01T00:00:00.000Z'),
    new Date('2019-12-31T23:59:59.999Z'),
    new Date('2019-12-31T00:00:00.000Z'),
    new Date('2020-11-30T23:59:59.999Z'),
    new Date('2020-11-30T00:00:00.000Z'),
    new Date('2021-04-30T23:59:59.999Z'),
    new Date('2021-04-01T23:59:59.999Z'),
    new Date('2021-04-01T00:00:00.000Z'),
    new Date('2020-03-23T00:00:00.000Z'),
    new Date('2020-03-31T00:00:00.000Z'),
    new Date('2020-10-23T00:00:00.000Z'),
    new Date('2020-10-31T00:00:00.000Z'),
    new Date('2021-03-23T00:00:00.000Z'),
    new Date('2021-03-31T00:00:00.000Z'),
    new Date('2021-10-23T00:00:00.000Z'),
    new Date('2021-10-31T00:00:00.000Z'),
    new Date('2020-03-23T23:59:59.999Z'),
    new Date('2020-03-31T23:59:59.999Z'),
    new Date('2020-10-23T23:59:59.999Z'),
    new Date('2020-10-31T23:59:59.999Z'),
    new Date('2021-03-23T23:59:59.999Z'),
    new Date('2021-03-31T23:59:59.999Z'),
    new Date('2021-10-23T23:59:59.999Z'),
    new Date('2021-10-31T23:59:59.999Z'),

    new Date(2017, 0, 1, 0, 0, 0, 0),
    new Date(2017, 4, 26, 21, 21, 34, 381),
    new Date(2018, 0, 1, 0, 0, 0, 0),
    new Date(2018, 0, 1, 23, 0, 0, 0),
    new Date(2019, 0, 1, 0, 0, 0, 0),
    new Date(2019, 11, 31, 23, 59, 59, 999),
    new Date(2019, 11, 31, 0, 0, 0, 0),
    new Date(2020, 10, 30, 23, 59, 59, 999),
    new Date(2020, 10, 30, 0, 0, 0, 0),
    new Date(2021, 3, 30, 23, 59, 59, 999),
    new Date(2021, 3, 1, 23, 59, 59, 999),
    new Date(2021, 3, 1, 0, 0, 0, 0),
    new Date(2020, 2, 23, 0, 0, 0, 0),
    new Date(2020, 2, 31, 0, 0, 0, 0),
    new Date(2020, 9, 23, 0, 0, 0, 0),
    new Date(2020, 9, 31, 0, 0, 0, 0),
    new Date(2021, 2, 23, 0, 0, 0, 0),
    new Date(2021, 2, 31, 0, 0, 0, 0),
    new Date(2021, 9, 23, 0, 0, 0, 0),
    new Date(2021, 9, 31, 0, 0, 0, 0),
    new Date(2020, 2, 23, 23, 59, 59, 999),
    new Date(2020, 2, 31, 23, 59, 59, 999),
    new Date(2020, 9, 23, 23, 59, 59, 999),
    new Date(2020, 9, 31, 23, 59, 59, 999),
    new Date(2021, 2, 23, 23, 59, 59, 999),
    new Date(2021, 2, 31, 23, 59, 59, 999),
    new Date(2021, 9, 23, 23, 59, 59, 999),
    new Date(2021, 9, 31, 23, 59, 59, 999),

    new Date(Date.UTC(2017, 0, 1, 0, 0, 0, 0)),
    new Date(Date.UTC(2017, 4, 26, 21, 21, 34, 381)),
    new Date(Date.UTC(2018, 0, 1, 0, 0, 0, 0)),
    new Date(Date.UTC(2018, 0, 1, 23, 0, 0, 0)),
    new Date(Date.UTC(2019, 0, 1, 0, 0, 0, 0)),
    new Date(Date.UTC(2019, 11, 31, 23, 59, 59, 999)),
    new Date(Date.UTC(2019, 11, 31, 0, 0, 0, 0)),
    new Date(Date.UTC(2020, 10, 30, 23, 59, 59, 999)),
    new Date(Date.UTC(2020, 10, 30, 0, 0, 0, 0)),
    new Date(Date.UTC(2021, 3, 30, 23, 59, 59, 999)),
    new Date(Date.UTC(2021, 3, 1, 23, 59, 59, 999)),
    new Date(Date.UTC(2021, 3, 1, 0, 0, 0, 0)),
    new Date(Date.UTC(2020, 2, 23, 0, 0, 0, 0)),
    new Date(Date.UTC(2020, 2, 31, 0, 0, 0, 0)),
    new Date(Date.UTC(2020, 9, 23, 0, 0, 0, 0)),
    new Date(Date.UTC(2020, 9, 31, 0, 0, 0, 0)),
    new Date(Date.UTC(2021, 2, 23, 0, 0, 0, 0)),
    new Date(Date.UTC(2021, 2, 31, 0, 0, 0, 0)),
    new Date(Date.UTC(2021, 9, 23, 0, 0, 0, 0)),
    new Date(Date.UTC(2021, 9, 31, 0, 0, 0, 0)),
    new Date(Date.UTC(2020, 2, 23, 23, 59, 59, 999)),
    new Date(Date.UTC(2020, 2, 31, 23, 59, 59, 999)),
    new Date(Date.UTC(2020, 9, 23, 23, 59, 59, 999)),
    new Date(Date.UTC(2020, 9, 31, 23, 59, 59, 999)),
    new Date(Date.UTC(2021, 2, 23, 23, 59, 59, 999)),
    new Date(Date.UTC(2021, 2, 31, 23, 59, 59, 999)),
    new Date(Date.UTC(2021, 9, 23, 23, 59, 59, 999)),
    new Date(Date.UTC(2021, 9, 31, 23, 59, 59, 999)),

    '2017-01-01T00:00:00.000Z',
    '2017-05-26T21:21:34.381Z',
    '2018-01-01T00:00:00.000Z',
    '2018-01-01T23:00:00.000Z',
    '2019-01-01T00:00:00.000Z',
    '2019-12-31T23:59:59.999Z',
    '2019-12-31T00:00:00.000Z',
    '2020-11-30T23:59:59.999Z',
    '2020-11-30T00:00:00.000Z',
    '2021-04-30T23:59:59.999Z',
    '2021-04-01T23:59:59.999Z',
    '2021-04-01T00:00:00.000Z',
    '2020-03-23T00:00:00.000Z',
    '2020-03-31T00:00:00.000Z',
    '2020-10-23T00:00:00.000Z',
    '2020-10-31T00:00:00.000Z',
    '2021-03-23T00:00:00.000Z',
    '2021-03-31T00:00:00.000Z',
    '2021-10-23T00:00:00.000Z',
    '2021-10-31T00:00:00.000Z',
    '2020-03-23T23:59:59.999Z',
    '2020-03-31T23:59:59.999Z',
    '2020-10-23T23:59:59.999Z',
    '2020-10-31T23:59:59.999Z',
    '2021-03-23T23:59:59.999Z',
    '2021-03-31T23:59:59.999Z',
    '2021-10-23T23:59:59.999Z',
    '2021-10-31T23:59:59.999Z'
  ];

  dates.map(date => {
    it(`should have num days of month with date ${
      typeof date === 'object'
        ? date.toISOString() + ' type date'
        : date + ' type string'
    } should verify`, () => {
      const expected = moment(date).daysInMonth();
      const actual = datetime(date).daysInMonth();
      expect(actual).toEqual(expected);
    });

    it(`utc: should have num days of month with date ${
      typeof date === 'object'
        ? date.toISOString() + ' type date'
        : date + ' type string'
    } should verify`, () => {
      const expected = moment.utc(date).daysInMonth();
      const actual = datetime.utc(date).daysInMonth();
      expect(actual).toEqual(expected);
    });
  });
});
