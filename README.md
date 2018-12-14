# datetime

[![Travis](https://img.shields.io/travis/KorbinianKuhn/datetime.svg?style=flat-square)](https://travis-ci.org/KorbinianKuhn/datetime/builds)

[![Coverage](http://img.shields.io/coveralls/KorbinianKuhn/datetime.svg?style=flat-square&branch=master)](https://coveralls.io/r/KorbinianKuhn/datetime)

[![Known Vulnerabilities](https://snyk.io/test/github/KorbinianKuhn/datetime/badge.svg?style=flat-square)](https://snyk.io/test/github/KorbinianKuhn/datetime)

[![Dependencies](https://img.shields.io/david/KorbinianKuhn/datetime.svg?style=flat-square)](https://david-dm.org/KorbinianKuhn/datetime)

[![Dev Dependencies](https://img.shields.io/david/dev/KorbinianKuhn/datetime.svg?style=flat-square)](https://david-dm.org/KorbinianKuhn/datetime)

[![npm](https://img.shields.io/npm/dt/@korbiniankuhn/datetime.svg?style=flat-square)](https://www.npmjs.com/package/@korbiniankuhn/datetime)

[![npm-version](https://img.shields.io/npm/v/@korbiniankuhn/datetime.svg?style=flat-square)](https://www.npmjs.com/package/@korbiniankuhn/datetime)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![license](https://img.shields.io/github/license/KorbinianKuhn/datetime.svg?style=flat-square)

High performance date manipulations.

This library just provides human readable functions for simple, mostly mathematical date operations. All operations are expecting a valid date object and do not check their input arguments to provide maximum performance. If you want immutability, use the `clone` function.

There are already a lot of very good libraries like momentjs, date-fns, dayjs or instadate.

Use this library, if you want:

- the highest performance
- have a moment like syntax

Don't use this library, if you need:

- language internationalization
- date input or output parsing support for various non-standard formats

All functions are tested against momentjs operations.

## Installation

For installation use the [Node Package Manager](https://github.com/npm/npm):

```
$ npm install --save @korbiniankuhn/datetime
```

or clone the repository:

```
$ git clone https://github.com/KorbinianKuhn/datetime
```

## Getting started

```javascript
const datetime = require('@korbiniankuhn/datetime');

/* Create new date object add two months and return native date object */
datetime()
  .add(2, 'months')
  .toDate();

/* An immutable usage */
datetime()
  .clone()
  .subtract(1, 'year')
  .toDate();

/* Create a new utc date */
datetime
  .utc()
  .add(2000, 'ms')
  .toDate();

/* Use existing date */
datetime(new Date())
  .startOf('month')
  .toDate();
```

## API

`datetime().add(amount, unit)`: Add interval to date.

`datetime().clone()`: Create a copy of the date.

`datetime().daysInMonth()`: Get the number of days in month.

`datetime().daysInQuarter()`: Get the number of days in quarter.

`datetime().daysInYear()`: Get the number of days in year.

`datetime().diff(date, unit)`: Get the difference between two dates.

`datetime().endOf(unit)`: Set date to end of given interval.

`datetime().getQuarter()`: Get quarter of date in year. First quarter starts with 1.

`datetime().get(unit)`: Get value of given unit.

`datetime().isAfter(date, unit)`: Check if date is after another date.

`datetime().isBefore(date, unit)`: Check if date is before another date.

`datetime().isLeapYear()`: Check if date is a leap year.

`datetime().isSame(date, unit)`: Check if date is same as another date.

`datetime().isSameOrAfter(date, unit)`: Check if date is same as or after another date.

`datetime().isSameOrBefore(date, unit)`: Check if date is same as or after another date.

`datetime().isUTC()`: Returns if the DateTime object is in UTC mode.

`datetime().isValid()`: Check if date is valid.

`datetime().set(value, unit)`: Set value of given unit.

`datetime().startOf(unit)`: Set date to end of given interval.

`datetime().subtract(amount, unit)`: Subtract interval from date.

`datetime().toUTC()`: Convert date to utc timezone.

`datetime().unix()`: Get a unix timestamp of the date (without milliseconds).

## Testing

First you have to install all dependencies:

```
$ npm install
```

To execute all unit tests once, use:

```
$ npm test
```

To get information about the test coverage, use:

```
$ npm run test:coverage
```

## Contribution

Get involved and push in your ideas.

Do not forget to add corresponding tests to keep up 100% test coverage.

## License

[The MIT License](LICENSE)
