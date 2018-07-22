const moment = require('moment');
const datetime = require('./../index');

datetime.addPrototypes();

describe('toUTC functions', () => {
  it('should return correct toUTC timestamp', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expected = moment.utc(date).toDate();

    expect(datetime.toUTC(date)).toEqual(expected);
    expect(date.toUTC()).toEqual(expected);
    expect(datetime(date).toUTC()).toEqual(expected);
    expect(datetime.utc(date).toDate()).toEqual(expected);
  });
});
