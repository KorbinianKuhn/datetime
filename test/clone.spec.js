const datetime = require('./../dist');

describe('clone()', () => {
  it('should clone date correctly', () => {
    const date = datetime('2017-02-01T00:00:00.000Z');
    const clonedDate = date.clone();

    expect(date).not.toBe(clonedDate);
    expect(date.getTime()).toEqual(clonedDate.getTime());
    expect(clonedDate.constructor.name).toEqual('DateTime');
  });
});
