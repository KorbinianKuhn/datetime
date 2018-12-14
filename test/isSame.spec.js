const moment = require('moment');
const datetime = require('../dist');

describe('isSame()', () => {
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
        const expected = moment(date).isSame(dateB, unit);
        const actual = datetime(date).isSame(dateB, unit);
        expect(actual).toEqual(expected);
      });

      it(`utc: with unit ${unit} and date ${date.toISOString()} should verify`, () => {
        const expected = moment.utc(date).isSame(dateB, unit);
        const actual = datetime.utc(date).isSame(dateB, unit);
        expect(actual).toEqual(expected);
      });
    });
  });
});
