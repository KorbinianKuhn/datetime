const moment = require('moment');
const datetime = require('./../dist');

describe('getQuarter()', () => {
  it('should be first quarter', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');
    const expectedQuarter = 1;

    expect(moment(date).quarter()).toEqual(expectedQuarter);
    expect(datetime(date).getQuarter()).toEqual(expectedQuarter);
  });

  it('should be second quarter', () => {
    const date = new Date('2016-06-01T00:00:00.000Z');
    const expectedQuarter = 2;

    expect(moment(date).quarter()).toEqual(expectedQuarter);
    expect(datetime(date).getQuarter()).toEqual(expectedQuarter);
  });

  it('should be third quarter', () => {
    const date = new Date('2018-09-01T00:00:00.000Z');
    const expectedQuarter = 3;

    expect(moment(date).quarter()).toEqual(expectedQuarter);
    expect(datetime(date).getQuarter()).toEqual(expectedQuarter);
  });

  it('should be fourth quarter', () => {
    const date = new Date('2018-11-01T00:00:00.000Z');
    const expectedQuarter = 4;

    expect(moment(date).quarter()).toEqual(expectedQuarter);
    expect(datetime(date).getQuarter()).toEqual(expectedQuarter);
  });
});
