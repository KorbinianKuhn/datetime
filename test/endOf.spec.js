const moment = require('moment');
const datetime = require('../dist');

describe('endOf()', () => {
  const dates = [
    new Date('2017-05-26T21:21:34.381Z'),
    new Date('2018-01-01T00:00:00.000Z'),
    new Date('2018-01-01T23:00:00.000Z'),
    new Date('2019-12-31T23:59:59.999Z'),
    new Date('2020-11-30T23:59:59.999Z'),
    new Date('2021-04-30T23:59:59.999Z'),
    new Date('2021-04-01T23:59:59.999Z'),
    new Date('2021-04-01T00:00:00.000Z')
  ];
  const units = ['second', 'minute', 'hour', 'day', 'month', 'quarter', 'year'];

  units.map(unit => {
    dates.map(date => {
      it(`with unit ${unit} and date ${date.toISOString()} should verify`, () => {
        const expected = moment(date)
          .endOf(unit)
          .toDate();
        const actual = datetime(date)
          .endOf(unit)
          .toDate();
        expect(actual).toEqual(expected);
      });

      it(`utc: with unit ${unit} and date ${date.toISOString()} should verify`, () => {
        const expected = moment
          .utc(date)
          .endOf(unit)
          .toDate();
        const actual = datetime
          .utc(date)
          .endOf(unit)
          .toDate();
        expect(actual).toEqual(expected);
      });
    });
  });
});
