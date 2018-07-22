const moment = require('moment');
const datetime = require('./../index');

datetime.addPrototypes();

describe('isBefore functions', () => {
  const dates = [
    new Date('2017-01-01T00:00:00.000Z'),
    new Date('2018-01-01T00:00:00.000Z'),
    new Date('2019-01-01T00:00:00.000Z')
  ];
  const functionNames = [
    'isBefore',
    'isBeforeMillisecond',
    'isBeforeSecond',
    'isBeforeMinute',
    'isBeforeHour',
    'isBeforeDay',
    'isBeforeMonth',
    'isBeforeYear'
  ];
  const momentIntervals = [
    'millisecond',
    'millisecond',
    'second',
    'minute',
    'hour',
    'day',
    'month',
    'year'
  ];

  const dateA = new Date('2018-01-01T00:00:00.000Z');

  for (let i = 0; i < functionNames.length; i++) {
    const functionName = functionNames[i];
    const momentInterval = momentIntervals[i];
    for (const dateB of dates) {
      const expected = moment(dateA).isBefore(moment(dateB), momentInterval);

      it(`${functionName} should verify`, () => {
        expect(datetime[functionName](dateA, dateB)).toEqual(expected);
        expect(dateA[functionName](dateB)).toEqual(expected);
        expect(datetime(dateA)[functionName](dateB)).toEqual(expected);
      });
    }
  }
});
