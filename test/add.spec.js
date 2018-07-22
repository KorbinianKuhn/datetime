const moment = require("moment");
const datetime = require("./../index");

datetime.addPrototypes();

describe("add functions", () => {
  const amounts = [0, 1, 5, 40, 100, 500];
  const functionNames = [
    "addMilliseconds",
    "addSeconds",
    "addMinutes",
    "addHours",
    "addDays",
    "addMonths",
    "addYears"
  ];
  const momentIntervals = [
    "milliseconds",
    "seconds",
    "minutes",
    "hours",
    "days",
    "months",
    "years"
  ];

  const date = new Date("2018-01-01T00:00:00.000Z");

  for (let i = 0; i < functionNames.length; i++) {
    const functionName = functionNames[i];
    const momentInterval = momentIntervals[i];
    for (const amount of amounts) {
      const expected = moment(new Date(date))
        .add(amount, momentInterval)
        .toDate()
        .getTime();

      it(`${functionName} with amount ${amount} should verify`, () => {
        expect(
          datetime[functionName](new Date(date), amount).getTime()
        ).toEqual(expected);
        expect(new Date(date)[functionName](amount).getTime()).toEqual(
          expected
        );
        expect(
          datetime(new Date(date))
            [functionName](amount)
            .getTime()
        ).toEqual(expected);
      });
    }
  }
});
