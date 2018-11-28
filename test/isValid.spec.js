const moment = require('moment');
const datetime = require('./../dist');

describe('isValid*(', () => {
  it('should be valid', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');

    expect(moment(date).isValid()).toEqual(true);
    expect(datetime(date).isValid()).toEqual(true);
  });

  it('should not be valid', () => {
    const date = new Date('wrong');

    expect(moment(date).isValid()).toEqual(false);
    expect(datetime(date).isValid()).toEqual(false);
  });
});
