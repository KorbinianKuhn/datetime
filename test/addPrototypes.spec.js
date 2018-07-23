const datetime = require('./../index');

describe('addProtoypes()', () => {
  it('first attempt should verify, second fail', () => {
    expect(() => {
      datetime.addPrototypes();
    }).not.toThrow();
    expect(() => {
      datetime.addPrototypes();
    }).toThrowError('add is already a prototype of Date');
  });
});
