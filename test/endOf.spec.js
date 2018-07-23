const moment = require('moment');
const datetime = require('./../index');

datetime.addPrototypes();

describe('endOf functions', () => {
  const dates = [
    new Date('2017-05-26T21:21:34.381Z'),
    new Date('2018-01-01T00:00:00.000Z'),
    new Date('2019-12-31T23:59:59.999Z')
  ];
  const functionNames = [
    'endOfSecond',
    'endOfMinute',
    'endOfHour',
    'endOfDay',
    'endOfMonth',
    'endOfQuarter',
    'endOfYear'
  ];
  const momentIntervals = [
    'second',
    'minute',
    'hour',
    'day',
    'month',
    'quarter',
    'year'
  ];

  for (let i = 0; i < functionNames.length; i++) {
    const functionName = functionNames[i];
    const momentInterval = momentIntervals[i];
    for (const date of dates) {
      const expected = moment(date)
        .endOf(momentInterval)
        .toDate();

      it(`${functionName} should verify`, () => {
        expect(datetime[functionName](new Date(date))).toEqual(expected);
        expect(new Date(date)[functionName]()).toEqual(expected);
        expect(
          datetime(new Date(date))
            [functionName]()
            .toDate()
        ).toEqual(expected);
      });
    }
  }
});
