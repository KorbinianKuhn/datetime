const moment = require('moment');
const datetime = require('../dist');

describe('subtract()', () => {
  const amounts = [0, 1, 5, 40, 100, 500];
  const units = [
    'milliseconds',
    'seconds',
    'minutes',
    'hours',
    'days',
    'months',
    'quarters',
    'years'
  ];

  const date = new Date('2018-01-01T00:00:00.000Z');

  units.map(unit => {
    amounts.map(amount => {
      it(`with unit ${unit} and amount ${amount} should verify`, () => {
        const expected = moment(date)
          .subtract(amount, unit)
          .toDate()
          .getTime();
        const actual = datetime(date)
          .subtract(amount, unit)
          .toDate()
          .getTime();
        expect(actual).toEqual(expected);
      });
    });
  });
});
