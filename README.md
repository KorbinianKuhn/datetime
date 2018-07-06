# lib

Fast date utilities.

## Getting started

Use all functions of the lib

```javascript
const lib = require("lib");

const date = new Date();

lib.addMonths(date, 2);
```

Import only required functions.

```javascript
const { addMonths } = require("lib");

const date = new Date();

addMonths(date, 2);
```

Add all functions as prototypes to the native Date object

```javascript
const { addPrototypes } = require("lib");

addPrototypes();

new Date().addMonths(2);
```

Use a special lib object to use function chaining without adding prototypes to the native Date object (e.g. momentjs or dayjs)

```javascript
const { date } = require("lib");

/* Create new date object add two months and return native date object */
date()
  .addMonths(2)
  .toDate();

/* Create native date object and manipulate it through lib date object */
const date = new Date();
date(date).addMonths(2);

/* An immutable usage */
const date = new Date();
date(date)
  .clone()
  .addMonths(2);
```
