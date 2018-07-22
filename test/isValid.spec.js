const moment = require("moment");
const datetime = require('./../index');

datetime.addPrototypes();

describe("isValid functions", () => {
  it('should be valid', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');

    expect(moment(date).isValid()).toEqual(true);
    expect(datetime.isValid(date)).toEqual(true);
    expect(date.isValid()).toEqual(true);
    expect(datetime(date).isValid()).toEqual(true);
  });

  it('should not be valid', () => {
    const date = new Date('wrong');

    expect(moment(date).isValid()).toEqual(false);
    expect(datetime.isValid(date)).toEqual(false);
    expect(date.isValid()).toEqual(false);
    expect(datetime(date).isValid()).toEqual(false);
  });
});
