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
const datetime = require("@korbiniankuhn/datetime");

/* Create new date object add two months and return native date object */
datetime()
  .addMonths(2)
  .toDate();

/* Create native date object and manipulate it through lib date object */
const date = new Date();
datetime(date).addMonths(2).toDate();

/* An immutable usage */
const date = new Date();
datetime(date)
  .clone()
  .addMonths(2)
  .toDate();

/* Create a new utc date */
datetime.utc()
  .toDate();
```

## API

### add*

Add interval to date.

| Functional                          | Prototype / datetime                            |
| ----------------------------------- | ----------------------------------------------- |
| ```addMilliseconds(date, amount)``` | ```(Date / datetime).addMilliseconds(amount)``` |
| ```addSeconds(date, amount)```      | ```(Date / datetime).addSeconds(amount)```      |
| ```addMinutes(date, amount)```      | ```(Date / datetime).addMinutes(amount)```      |
| ```addHours(date, amount)```        | ```(Date / datetime).addHours(amount)```        |
| ```addDays(date, amount)```         | ```(Date / datetime).addDays(amount)```         |
| ```addMonths(date, amount)```       | ```(Date / datetime).addMonths(amount)```       |
| ```addYears(date, amount)```        | ```(Date / datetime).addYears(amount)```        |

### addPrototypes()

Add all functions of the lib to the native date object.

### clone

Create a copy of the date.

| Functional        | Prototype / datetime            |
| ----------------- | ------------------------------- |
| ```clone(date)``` | ```(Date / datetime).clone()``` |

### daysInMonth

Get the number of days in month.

| Functional              | Prototype / datetime                  |
| ----------------------- | ------------------------------------- |
| ```daysInMonth(date)``` | ```(Date / datetime).daysInMonth()``` |

### daysInYear

Get the number of days in year.

| Functional             | Prototype / datetime                 |
| ---------------------- | ------------------------------------ |
| ```daysInYear(date)``` | ```(Date / datetime).daysInYear()``` |

### diff*

Get the difference between two dates.

| Functional                                   | Prototype / datetime                                    |
| -------------------------------------------- | ------------------------------------------------------- |
| ```differenceInMilliseconds(dateA, dateB)``` | ```(Date / datetime).differenceInMilliseconds(dateB)``` |
| ```differenceInSeconds(dateA, dateB)```      | ```(Date / datetime).differenceInSeconds(dateB)```      |
| ```differenceInMinutes(dateA, dateB)```      | ```(Date / datetime).differenceInMinutes(dateB)```      |
| ```differenceInHours(dateA, dateB)```        | ```(Date / datetime).differenceInHours(dateB)```        |
| ```differenceInDays(dateA, dateB)```         | ```(Date / datetime).differenceInDays(dateB)```         |
| ```differenceInMonths(dateA, dateB)```       | ```(Date / datetime).differenceInMonths(dateB)```       |
| ```differenceInYears(dateA, dateB)```        | ```(Date / datetime).differenceInYears(dateB)```        |

### endOf*

Set date to end of given interval.

| Functional                   | Prototype / datetime                       |
| ---------------------------- | ------------------------------------------ |
| ```endOfMillisecond(date)``` | ```(Date / datetime).endOfMillisecond()``` |
| ```endOfSecond(date)```      | ```(Date / datetime).endOfSecond()```      |
| ```endOfMinute(date)```      | ```(Date / datetime).endOfMinute()```      |
| ```endOfHour(date)```        | ```(Date / datetime).endOfHour()```        |
| ```endOfDay(date)```         | ```(Date / datetime).endOfDay()```         |
| ```endOfMonth(date)```       | ```(Date / datetime).endOfMonth()```       |
| ```endOfYear(date)```        | ```(Date / datetime).endOfYear()```        |

### isAfter*

Check if date is after another date.

| Functional                             | Prototype / datetime                              |
| -------------------------------------- | ------------------------------------------------- |
| ```isAfter(dateA, dateB)```            | ```(Date / datetime).isAfter(dateB)```            |
| ```isAfterMillisecond(dateA, dateB)``` | ```(Date / datetime).isAfterMillisecond(dateB)``` |
| ```isAfterSecond(dateA, dateB)```      | ```(Date / datetime).isAfterSecond(dateB)```      |
| ```isAfterMinute(dateA, dateB)```      | ```(Date / datetime).isAfterMinute(dateB)```      |
| ```isAfterHour(dateA, dateB)```        | ```(Date / datetime).isAfterHour(dateB)```        |
| ```isAfterDay(dateA, dateB)```         | ```(Date / datetime).isAfterDay(dateB)```         |
| ```isAfterMonth(dateA, dateB)```       | ```(Date / datetime).isAfterMonth(dateB)```       |
| ```isAfterYear(dateA, dateB)```        | ```(Date / datetime).isAfterYear(dateB)```        |

### isBefore*

Check if date is before another date.

| Functional                              | Prototype / datetime                               |
| --------------------------------------- | -------------------------------------------------- |
| ```isBefore(dateA, dateB)```            | ```(Date / datetime).isBefore(dateB)```            |
| ```isBeforeMillisecond(dateA, dateB)``` | ```(Date / datetime).isBeforeMillisecond(dateB)``` |
| ```isBeforeSecond(dateA, dateB)```      | ```(Date / datetime).isBeforeSecond(dateB)```      |
| ```isBeforeMinute(dateA, dateB)```      | ```(Date / datetime).isBeforeMinute(dateB)```      |
| ```isBeforeHour(dateA, dateB)```        | ```(Date / datetime).isBeforeHour(dateB)```        |
| ```isBeforeDay(dateA, dateB)```         | ```(Date / datetime).isBeforeDay(dateB)```         |
| ```isBeforeMonth(dateA, dateB)```       | ```(Date / datetime).isBeforeMonth(dateB)```       |
| ```isBeforeYear(dateA, dateB)```        | ```(Date / datetime).isBeforeYear(dateB)```        |

### isLeapYear

Check if date is a leap year.

| Functional             | Prototype / datetime                 |
| ---------------------- | ------------------------------------ |
| ```isLeapYear(date)``` | ```(Date / datetime).isLeapYear()``` |

### isSame*

Check if date is same as another date.

| Functional                            | Prototype / datetime                             |
| ------------------------------------- | ------------------------------------------------ |
| ```isSame(dateA, dateB)```            | ```(Date / datetime).isSame(dateB)```            |
| ```isSameMillisecond(dateA, dateB)``` | ```(Date / datetime).isSameMillisecond(dateB)``` |
| ```isSameSecond(dateA, dateB)```      | ```(Date / datetime).isSameSecond(dateB)```      |
| ```isSameMinute(dateA, dateB)```      | ```(Date / datetime).isSameMinute(dateB)```      |
| ```isSameHour(dateA, dateB)```        | ```(Date / datetime).isSameHour(dateB)```        |
| ```isSameDay(dateA, dateB)```         | ```(Date / datetime).isSameDay(dateB)```         |
| ```isSameMonth(dateA, dateB)```       | ```(Date / datetime).isSameMonth(dateB)```       |
| ```isSameYear(dateA, dateB)```        | ```(Date / datetime).isSameYear(dateB)```        |

### isSameOrAfter*

Check if date is same as or after another date.

| Functional                                   | Prototype / datetime                                    |
| -------------------------------------------- | ------------------------------------------------------- |
| ```isSameOrAfter(dateA, dateB)```            | ```(Date / datetime).isSameOrAfter(dateB)```            |
| ```isSameOrAfterMillisecond(dateA, dateB)``` | ```(Date / datetime).isSameOrAfterMillisecond(dateB)``` |
| ```isSameOrAfterSecond(dateA, dateB)```      | ```(Date / datetime).isSameOrAfterSecond(dateB)```      |
| ```isSameOrAfterMinute(dateA, dateB)```      | ```(Date / datetime).isSameOrAfterMinute(dateB)```      |
| ```isSameOrAfterHour(dateA, dateB)```        | ```(Date / datetime).isSameOrAfterHour(dateB)```        |
| ```isSameOrAfterDay(dateA, dateB)```         | ```(Date / datetime).isSameOrAfterDay(dateB)```         |
| ```isSameOrAfterMonth(dateA, dateB)```       | ```(Date / datetime).isSameOrAfterMonth(dateB)```       |
| ```isSameOrAfterYear(dateA, dateB)```        | ```(Date / datetime).isSameOrAfterYear(dateB)```        |

### isSameOrBefore*

Check if date is same as or before another date.

| Functional                                    | Prototype / datetime                                     |
| --------------------------------------------- | -------------------------------------------------------- |
| ```isSameOrBefore(dateA, dateB)```            | ```(Date / datetime).isSameOrBefore(dateB)```            |
| ```isSameOrBeforeMillisecond(dateA, dateB)``` | ```(Date / datetime).isSameOrBeforeMillisecond(dateB)``` |
| ```isSameOrBeforeSecond(dateA, dateB)```      | ```(Date / datetime).isSameOrBeforeSecond(dateB)```      |
| ```isSameOrBeforeMinute(dateA, dateB)```      | ```(Date / datetime).isSameOrBeforeMinute(dateB)```      |
| ```isSameOrBeforeHour(dateA, dateB)```        | ```(Date / datetime).isSameOrBeforeHour(dateB)```        |
| ```isSameOrBeforeDay(dateA, dateB)```         | ```(Date / datetime).isSameOrBeforeDay(dateB)```         |
| ```isSameOrBeforeMonth(dateA, dateB)```       | ```(Date / datetime).isSameOrBeforeMonth(dateB)```       |
| ```isSameOrBeforeYear(dateA, dateB)```        | ```(Date / datetime).isSameOrBeforeYear(dateB)```        |

### isValid

Check if date is valid.

| Functional          | Prototype / datetime              |
| ------------------- | --------------------------------- |
| ```isValid(date)``` | ```(Date / datetime).isValid()``` |

### startOf*

Set date to end of given interval.

| Functional                     | Prototype / datetime                         |
| ------------------------------ | -------------------------------------------- |
| ```startOfMillisecond(date)``` | ```(Date / datetime).startOfMillisecond()``` |
| ```startOfSecond(date)```      | ```(Date / datetime).startOfSecond()```      |
| ```startOfMinute(date)```      | ```(Date / datetime).startOfMinute()```      |
| ```startOfHour(date)```        | ```(Date / datetime).startOfHour()```        |
| ```startOfDay(date)```         | ```(Date / datetime).startOfDay()```         |
| ```startOfMonth(date)```       | ```(Date / datetime).startOfMonth()```       |
| ```startOfYear(date)```        | ```(Date / datetime).startOfYear()```        |

### subtract*

Subtract interval from date.

| Functional                               | Prototype / datetime                                 |
| ---------------------------------------- | ---------------------------------------------------- |
| ```subtractMilliseconds(date, amount)``` | ```(Date / datetime).subtractMilliseconds(amount)``` |
| ```subtractSeconds(date, amount)```      | ```(Date / datetime).subtractSeconds(amount)```      |
| ```subtractMinutes(date, amount)```      | ```(Date / datetime).subtractMinutes(amount)```      |
| ```subtractHours(date, amount)```        | ```(Date / datetime).subtractHours(amount)```        |
| ```subtractDays(date, amount)```         | ```(Date / datetime).subtractDays(amount)```         |
| ```subtractMonths(date, amount)```       | ```(Date / datetime).subtractMonths(amount)```       |
| ```subtractYears(date, amount)```        | ```(Date / datetime).subtractYears(amount)```        |

### toUTC

Convert date to utc timezone.

| Functional        | Prototype / datetime            |
| ----------------- | ------------------------------- |
| ```toUTC(date)``` | ```(Date / datetime).toUTC()``` |

### unix

Get a unix timestamp of the date (without milliseconds).

| Functional       | Prototype / datetime           |
| ---------------- | ------------------------------ |
| ```unix(date)``` | ```(Date / datetime).unix()``` |

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
