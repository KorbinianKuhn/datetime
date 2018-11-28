const moment = require('moment');
const datetime = require('../dist');

describe('diff()', () => {
  const dates = [
    new Date('2017-01-01T00:00:00.000Z'),
    new Date('2018-01-01T00:00:00.000Z'),
    new Date('2019-01-01T00:00:00.000Z')
  ];

  const units = [
    'millisecond',
    'second',
    'minute',
    'hour',
    'day',
    'month',
    'quarter',
    'year'
  ];

  const dateB = new Date('2018-01-01T00:00:00.000Z');

  units.map(unit => {
    dates.map(date => {
      it(`with unit ${unit} and date ${date.toISOString()} should verify`, () => {
        const expected = moment(date).diff(dateB, unit);
        const actual = datetime(date).diff(dateB, unit);
        expect(actual).toEqual(expected);
      });
    });
  });
});
