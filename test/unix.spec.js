const moment = require('moment');
const datetime = require('./../index');

datetime.addPrototypes();

describe('unix functions', () => {
  it('should return correct unix timestamp', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expected = moment(date).unix();

    expect(datetime.unix(date)).toEqual(expected);
    expect(date.unix()).toEqual(expected);
    expect(datetime(date).unix()).toEqual(expected);
  });
});
