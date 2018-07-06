# datetime

[![Travis](https://img.shields.io/travis/KorbinianKuhn/datetime.svg?style=flat-square)](https://travis-ci.org/KorbinianKuhn/datetime/builds)
[![Coverage](http://img.shields.io/coveralls/KorbinianKuhn/datetime.svg?style=flat-square&branch=master)](https://coveralls.io/r/KorbinianKuhn/datetime)
[![Known Vulnerabilities](https://snyk.io/test/github/KorbinianKuhn/datetime/badge.svg?style=flat-square)](https://snyk.io/test/github/KorbinianKuhn/datetime)
[![Dependencies](https://img.shields.io/david/KorbinianKuhn/datetime.svg?style=flat-square)](https://david-dm.org/KorbinianKuhn/datetime)
[![Dev Dependencies](https://img.shields.io/david/dev/KorbinianKuhn/datetime.svg?style=flat-square)](https://david-dm.org/KorbinianKuhn/datetime)
[![npm](https://img.shields.io/npm/dt/@korbiniankuhn/datetime.svg?style=flat-square)](https://www.npmjs.com/package/@korbiniankuhn/datetime)
[![npm-version](https://img.shields.io/npm/v/@korbiniankuhn/datetime.svg?style=flat-square)](https://www.npmjs.com/package/@korbiniankuhn/datetime)
![license](https://img.shields.io/github/license/KorbinianKuhn/datetime.svg?style=flat-square)

High performance date manipulations.

There are already a lot of very good libraries like momentjs, date-fns, dayjs or instadate.

Use this library, if you want:

- the highest performance
- choose how to operate on dates (functional programming, prototyping or subclassing)

Don't use this library, if you need:

- language internationalization
- date input or output parsing support for various non-standard formats

This library just provides human readable functions for simple, mostly mathematical date operations. All operations are expecting a valid date object and do not check their input arguments to provide maximum performance. If you want immutability, use the ```clone``` function.

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

Use all functions of the lib

```javascript
const datetime = require("@korbiniankuhn/datetime");

const date = new Date();

datetime.addMonths(date, 2);
```

Import only required functions.

```javascript
const { addMonths } = require("@korbiniankuhn/datetime");

const date = new Date();

addMonths(date, 2);
```

Add all functions as prototypes to the native Date object

```javascript
const { addPrototypes } = require("@korbiniankuhn/datetime");

addPrototypes();

new Date().addMonths(2);
```

Use the DateTime object to use function chaining (like momentjs or dayjs) without adding prototypes to the native Date object.

```javascript
const { DateTime } = require("@korbiniankuhn/datetime");

/* Create new date object add two months and return native date object */
new DateTime()
  .addMonths(2)
  .toDate();

/* Create native date object and manipulate it through lib date object */
const date = new Date();
new DateTime(date).addMonths(2).toDate();

/* An immutable usage */
const date = new Date();
new DateTime(date)
  .clone()
  .addMonths(2)
  .toDate();
```

## API

### add

Functions:

- addMilliseconds
- addSeconds
- addMinutes
- addHours
- addDays
- addMonths
- addYears

Example:

```javascript
/* Functional */
addMilliseconds(date, amount);
// returns date object

/* Prototyping */
new Date().addMilliseconds(amount);
// returns date object

/* DateTime */
new DateTime().addMilliseconds(amount);
// return datetime object
```

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
$ npm run coverage
```

## Contribution

Get involved and push in your ideas.

Do not forget to add corresponding tests to keep up 100% test coverage.

## License

[The MIT License](LICENSE)
