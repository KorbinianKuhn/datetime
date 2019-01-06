const moment = require('moment');
const datetime = require('./../dist');

describe('isLeapYear()', () => {
  it('should be normal year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');

    const expected = moment(date).isLeapYear();
    const actual = datetime(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('should be leap year', () => {
    const date = new Date('2017-01-01T00:00:00.000Z');

    const expected = moment(date).isLeapYear();
    const actual = datetime(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('should be leap year', () => {
    const date = new Date('2017-12-31T23:59:59.999Z');

    const expected = moment(date).isLeapYear();
    const actual = datetime(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('utc: should be leap year', () => {
    const date = new Date('2017-02-01T00:00:00.000Z');

    const expected = moment.utc(date).isLeapYear();
    const actual = datetime.utc(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('utc: should be leap year', () => {
    const date = new Date('2017-01-01T00:00:00.000Z');

    const expected = moment.utc(date).isLeapYear();
    const actual = datetime.utc(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('utc: should be leap year', () => {
    const date = new Date('2017-12-31T23:59:59.999Z');

    const expected = moment.utc(date).isLeapYear();
    const actual = datetime.utc(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('should be leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');

    const expected = moment(date).isLeapYear();
    const actual = datetime(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('should be leap year', () => {
    const date = new Date('2016-01-01T00:00:00.000Z');

    const expected = moment(date).isLeapYear();
    const actual = datetime(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('should be leap year', () => {
    const date = new Date('2016-12-31T23:59:59.999Z');

    const expected = moment(date).isLeapYear();
    const actual = datetime(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('utc: should be leap year', () => {
    const date = new Date('2016-02-01T00:00:00.000Z');

    const expected = moment.utc(date).isLeapYear();
    const actual = datetime.utc(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('utc: should be leap year', () => {
    const date = new Date('2016-01-01T00:00:00.000Z');

    const expected = moment.utc(date).isLeapYear();
    const actual = datetime.utc(date).isLeapYear();
    expect(actual).toEqual(expected);
  });

  it('utc: should be leap year', () => {
    const date = new Date('2016-12-31T23:59:59.999Z');

    const expected = moment.utc(date).isLeapYear();
    const actual = datetime.utc(date).isLeapYear();
    expect(actual).toEqual(expected);
  });
});
