const moment = require("moment");
const datetime = require("./../index");

datetime.addPrototypes();

describe("clone functions", () => {
  it("should clone date correctly", () => {
    const date = new Date("2017-02-01T00:00:00.000Z");

    let clonedDate = datetime.clone(date);

    expect(date).not.toBe(clonedDate);
    expect(date.getTime()).toEqual(clonedDate.getTime());

    clonedDate = date.clone();

    expect(date).not.toBe(clonedDate);
    expect(date.getTime()).toEqual(clonedDate.getTime());

    clonedDate = datetime(date).clone();

    expect(date).not.toBe(clonedDate);
    expect(date.getTime()).toEqual(clonedDate.getTime());
  });
});
