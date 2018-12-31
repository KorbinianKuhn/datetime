const MILLISECONDS_PER_SECOND = 1000;
const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

const MILLISECOND = 'ms';
const SECOND = 's';
const MINUTE = 'm';
const HOUR = 'h';
const DAY = 'd';
const MONTH = 'M';
const QUARTER = 'Q';
const YEAR = 'y';

const REGEX_FORMAT = /\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

const padStart = (value: number) => {
  return value < 10 ? `0${value}` : `${value}`;
};

const padZoneStr = (negMinuts: number) => {
  const minutes = Math.abs(negMinuts);
  const hourOffset = Math.floor(minutes / 60);
  const minuteOffset = minutes % 60;
  return `${negMinuts <= 0 ? '+' : '-'}${padStart(hourOffset)}:${padStart(
    minuteOffset
  )}`;
};

const throwError = (message: string) => {
  throw new Error(`DateTime: ${message}`);
};

const normalizeUnit = (unit: string, allowMilliseconds: boolean = true) => {
  switch (unit) {
    case 'millisecond':
    case 'milliseconds':
    case 'ms':
      return allowMilliseconds
        ? MILLISECOND
        : throwError(`invalid time unit ${unit}`);
    case 'second':
    case 'seconds':
    case 's':
      return SECOND;
    case 'minute':
    case 'minutes':
    case 'm':
      return MINUTE;
    case 'hour':
    case 'hours':
    case 'h':
      return HOUR;
    case 'day':
    case 'days':
    case 'd':
      return DAY;
    case 'month':
    case 'months':
    case 'M':
      return MONTH;
    case 'quarter':
    case 'quarters':
    case 'Q':
      return QUARTER;
    case 'year':
    case 'years':
    case 'y':
      return YEAR;
  }
  throwError(`unknown time unit ${unit}`);
};

const toDateTime = (date: Date | DateTime, isUTC: boolean): DateTime => {
  return date instanceof DateTime ? date : isUTC ? utc(date) : local(date);
};

const absFloor = (number: number) => {
  if (number < 0) {
    // -0 -> 0
    return Math.ceil(number) || 0;
  } else {
    return Math.floor(number);
  }
};

const monthDiff = (a: DateTime, b: DateTime) => {
  // difference in months
  const wholeMonthDiff = ((b.year() as number) - (a.year() as number)) * 12 + ((b.month() as number) - (a.month() as number));
  // b is in (anchor - 1 month, anchor + 1 month)
  const anchor = a.clone().add(wholeMonthDiff, 'months').getTime();
  let anchor2;
  let adjust;

  if (b.getTime() - anchor < 0) {
    anchor2 = a.clone().add(wholeMonthDiff - 1, 'months').getTime();
    // linear across the month
    adjust = (b.getTime() - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a.clone().add(wholeMonthDiff + 1, 'months').getTime();
    // linear across the month
    adjust = (b.getTime() - anchor) / (anchor2 - anchor);
  }

  // check for negative zero, return zero if negative zero
  return -(wholeMonthDiff + adjust) || 0;
};

class DateTime extends Date {
  private _isUtc: boolean;

  constructor(value?: string | number | Date | DateTime) {
    value ? super(value) : super();
    this._isUtc = false;
  }

  /**
   * Add time to date.
   * @param amount - Amount of units to add.
   * @param unit - Unit of time the amount is for. Default is milliseconds.
   */
  public add(amount: number, unit: string = 'milliseconds'): DateTime {
    switch (normalizeUnit(unit, true)) {
      case MILLISECOND:
        this.setTime(this.getTime() + amount);
        break;
      case SECOND:
        this.setTime(this.getTime() + amount * MILLISECONDS_PER_SECOND);
        break;
      case MINUTE:
        this.setTime(this.getTime() + amount * MILLISECONDS_PER_MINUTE);
        break;
      case HOUR:
        this.setTime(this.getTime() + amount * MILLISECONDS_PER_HOUR);
        break;
      case DAY:
        this.date(this.get('day') + amount);
        break;
      case MONTH:
        const currentDayInMonth = this.get('day');
        this.month(this.get('month') + amount);
        const newDayInMonth = this.get('day');
        if (newDayInMonth !== currentDayInMonth) {
          this.subtract(newDayInMonth, 'days');
        }
        break;
      case QUARTER:
        const currentDayInQuarter = this.get('day');
        this.month(this.get('month') + amount * 3);
        const newDayInQuarter = this.get('day');
        if (newDayInQuarter !== currentDayInQuarter) {
          this.subtract(newDayInQuarter, 'days');
        }
        break;
      case YEAR:
        const currentDayInYear = this.get('day');
        this.year(this.get('year') + amount);
        const newDayInYear = this.get('day');
        if (newDayInYear !== currentDayInYear) {
          this.subtract(newDayInYear, 'days');
        }
        break;
    }
    return this;
  }

  public utcOffset(): number {
    return this.isUTC() === true ? 0 : this.getTimezoneOffset();
  }

  /**
   * Create copy of DateTime.
   */
  public clone(): DateTime {
    const datetime = new DateTime(this);
    return this.isUTC() ? datetime.toUTC() : datetime;
  }

  /**
   * Get number of days in month.
   */
  public daysInMonth(): number {
    return (
      this.clone()
        .startOf('month')
        .add(1, 'month')
        .date(0)
        // @ts-ignore
        .get('day')
    );
  }

  /**
   * Get number of days in quarter.
   */
  public daysInQuarter(): number {
    switch (this.getQuarter()) {
      case 1:
        return this.isLeapYear() ? 91 : 90;
      case 2:
        return 91;
      default:
        return 92;
    }
  }

  /**
   * Get number of days in year.
   */
  public daysInYear(): number {
    return this.isLeapYear() ? 366 : 365;
  }

  /**
   * Get difference between two dates.
   * @param date - The date that will be subtracted.
   * @param unit - Unit of time. Default is milliseconds.
   */
  public diff(date: Date | DateTime, unit: string = 'milliseconds', asFloat: boolean = false): number {
    const compareDate = toDateTime(date, this.isUTC());

    switch (normalizeUnit(unit)) {
      case MILLISECOND:
        return this.getTime() - compareDate.getTime();
      case SECOND:
        return asFloat
          ? (this.getTime() - compareDate.getTime()) / MILLISECONDS_PER_SECOND
          : absFloor((this.getTime() - compareDate.getTime()) / MILLISECONDS_PER_SECOND);
      case MINUTE:
        return asFloat
          ? (this.getTime() - compareDate.getTime()) / MILLISECONDS_PER_MINUTE
          : absFloor((this.getTime() - compareDate.getTime()) / MILLISECONDS_PER_MINUTE);
      case HOUR:
        return asFloat
          ? (this.getTime() - compareDate.getTime()) / MILLISECONDS_PER_HOUR
          : absFloor(
            (this.getTime() - compareDate.getTime()) / MILLISECONDS_PER_HOUR
          );
      case DAY: {
        const offset: number = (compareDate.utcOffset() - this.utcOffset()) * MILLISECONDS_PER_MINUTE;
        return asFloat
          ? (this.getTime() - compareDate.getTime() + offset) / MILLISECONDS_PER_DAY
          : absFloor((this.getTime() - compareDate.getTime() + offset) / MILLISECONDS_PER_DAY);
      }
      case MONTH:
        return asFloat
          ? monthDiff(this, compareDate)
          : absFloor(monthDiff(this, compareDate));
      case QUARTER:
        return asFloat
          ? monthDiff(this, compareDate) / 3
          : absFloor(monthDiff(this, compareDate) / 3);
      case YEAR:
        return asFloat
          ? monthDiff(this, compareDate) / 12
          : absFloor(monthDiff(this, compareDate) / 12);
      default:
        return 0;
    }
  }

  /**
   * Set date to endOf given unit of time.
   * @param unit - Unit of time. Default is second.
   */
  public endOf(unit: string = 'second'): DateTime {
    switch (normalizeUnit(unit, false)) {
      case SECOND:
        this.millisecond(999);
        break;
      case MINUTE:
        this.second(59, 999);
        break;
      case HOUR:
        this.minute(59, 59, 999);
        break;
      case DAY:
        this.hour(23, 59, 59, 999);
        break;
      case MONTH:
        this.hour(23, 59, 59, 999);
        this.date(this.daysInMonth());
        break;
      case QUARTER:
        this.date(1);
        this.hour(23, 59, 59, 999);
        this.month(this.get('quarter') * 3 - 1);
        this.date(this.daysInMonth());
        break;
      case YEAR:
        this.hour(23, 59, 59, 999);
        this.month(11);
        this.date(31);
        break;
    }
    return this;
  }

  /**
   * Format date to string.
   * @param format - The format string. Default is YYYY-MM-DDTHH:mm:sssZ.
   * @param locale - International locale. Default is en-US.
   */
  public format(
    format: string = 'YYYY-MM-DDTHH:mm:sssZ',
    locale: string = 'en-US'
  ): string {
    const zoneStr = padZoneStr(this.getTimezoneOffset());
    return format.replace(REGEX_FORMAT, match => {
      if (match.indexOf('[') > -1) {
        return match.replace(/\[|\]/g, '');
      }
      switch (match) {
        case 'YY':
          return `${this.year()}`.slice(-2);
        case 'YYYY':
          return `${this.year()}`;
        case 'M':
          return `${this.get('month') + 1}`;
        case 'MM':
          return padStart(this.get('month') + 1);
        case 'MMM':
          return this.toLocaleDateString(locale, { month: 'short' });
        case 'MMMM':
          return this.toLocaleDateString(locale, { month: 'long' });
        case 'D':
          return `${this.date()}`;
        case 'DD':
          return padStart(this.get('date'));
        case 'H':
          return `${this.hour()}`;
        case 'HH':
          return padStart(this.get('hour'));
        case 'h':
          return this.hour() === 0
            ? '12'
            : this.hour() < 13
              ? `${this.hour()}`
              : `${this.get('hour') - 12}`;
        case 'hh':
          return this.hour() === 0
            ? '12'
            : this.hour() < 13
              ? padStart(this.get('hour'))
              : padStart(this.get('hour') - 12);
        case 'a':
          return this.hour() < 12 ? 'am' : 'pm';
        case 'A':
          return this.hour() < 12 ? 'AM' : 'PM';
        case 'm':
          return `${this.minute()}`;
        case 'mm':
          return padStart(this.get('minute'));
        case 's':
          return `${this.second()}`;
        case 'ss':
          return `${padStart(this.get('second'))}`;
        case 'SSS':
          const ms = this.millisecond();
          return ms < 10 ? `00${ms}` : ms < 100 ? `0${ms}` : `${ms}`;
        case 'Z':
          return zoneStr;
        case 'ZZ':
          return zoneStr.replace(':', '');
        default:
          return '';
      }
    });
  }

  /**
   * Get quarter of date.
   */
  public getQuarter(): number {
    return Math.floor(this.get('month') / 3) + 1;
  }

  /**
   * Check if date is after given date depending on unit of time.
   * @param date - The date to compare with.
   * @param unit - Unit of time. Default is milliseconds.
   */
  public isAfter(
    date: Date | DateTime,
    unit: string = 'milliseconds'
  ): boolean {
    const diff = this.getTime() - date.getTime();
    if (diff <= 0) {
      return false;
    }
    const compareDate = toDateTime(date, this.isUTC());
    switch (normalizeUnit(unit, true)) {
      case MILLISECOND:
        return diff > 0;
      case SECOND: {
        return (
          diff >= MILLISECONDS_PER_SECOND || !this.isSame(compareDate, SECOND)
        );
      }
      case MINUTE:
        return (
          diff >= MILLISECONDS_PER_MINUTE || !this.isSame(compareDate, MINUTE)
        );
      case HOUR:
        return diff >= MILLISECONDS_PER_HOUR || !this.isSame(compareDate, HOUR);
      case DAY:
        return diff >= MILLISECONDS_PER_DAY || !this.isSame(compareDate, DAY);
      case MONTH:
        return (
          this.get('year') - compareDate.get('year') > 0 ||
          this.month() > compareDate.month()
        );
      case QUARTER:
        return (
          this.get('year') - compareDate.get('year') > 0 ||
          this.quarter() > compareDate.quarter()
        );
      case YEAR:
        return this.year() > compareDate.year();
      default:
        return false;
    }
  }

  /**
   * Check if date is before given date depending on unit of time.
   * @param date - The date to compare with.
   * @param unit - Unit of time. Default is milliseconds.
   */
  public isBefore(date: Date | DateTime, unit = 'milliseconds'): boolean {
    const compareDate = toDateTime(date, this.isUTC());
    return this.getTime() !== date.getTime() && compareDate.isAfter(this, unit);
  }

  /**
   * Check if date is leap year.
   */
  public isLeapYear(): boolean {
    const year = this.get('year');
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Check if date is same than given date depending on unit of time.
   * @param date - The date to compare with.
   * @param unit - Unit of time. Default is milliseconds.
   */
  public isSame(date: Date | DateTime, unit = 'milliseconds'): boolean {
    const compareDate: DateTime = toDateTime(date, this.isUTC());
    switch (normalizeUnit(unit, true)) {
      case MILLISECOND:
        return this.getTime() === compareDate.getTime();
      case SECOND:
        return (
          this.clone()
            .startOf(SECOND)
            .getTime() === compareDate.startOf(SECOND).getTime()
        );
      case MINUTE:
        return (
          this.clone()
            .startOf(MINUTE)
            .getTime() === compareDate.startOf(MINUTE).getTime()
        );
      case HOUR:
        return (
          this.clone()
            .startOf(HOUR)
            .getTime() === compareDate.startOf(HOUR).getTime()
        );
      case DAY:
        return (
          this.clone()
            .startOf(DAY)
            .getTime() === compareDate.startOf(DAY).getTime()
        );
      case MONTH:
        return (
          this.year() === compareDate.year() &&
          this.month() === compareDate.month()
        );
      case QUARTER:
        return (
          this.clone()
            .startOf(QUARTER)
            .getTime() === compareDate.startOf(QUARTER).getTime()
        );
      case YEAR:
        return this.year() === compareDate.year();
      default:
        return false;
    }
  }

  /**
   * Check if date is same than or after given date depending on unit of time.
   * @param date - The date to compare with.
   * @param unit - Unit of time. Default is milliseconds.
   */
  public isSameOrAfter(date: Date | DateTime, unit = 'milliseconds'): boolean {
    return this.isSame(date, unit) || this.isAfter(date, unit);
  }

  /**
   * Check if date is same than or before given date depending on unit of time.
   * @param date - The date to compare with.
   * @param unit - Unit of time. Default is milliseconds.
   */
  public isSameOrBefore(date: Date | DateTime, unit = 'milliseconds'): boolean {
    return this.isSame(date, unit) || this.isBefore(date, unit);
  }

  /**
   * Check if date is valid.
   */
  public isValid(): boolean {
    return !Number.isNaN(this.getTime());
  }

  /**
   * Set date to start of unit of time.
   * @param unit - Unit of time. Default is second.
   */
  public startOf(unit: string = 'second'): DateTime {
    switch (normalizeUnit(unit, false)) {
      case SECOND:
        this.millisecond(0);
        break;
      case MINUTE:
        this.second(0, 0);
        break;
      case HOUR:
        this.minute(0, 0, 0);
        break;
      case DAY:
        this.hour(0, 0, 0, 0);
        break;
      case MONTH:
        this.hour(0, 0, 0, 0);
        this.date(1);
        break;
      case QUARTER:
        this.hour(0, 0, 0, 0);
        this.date(1);
        this.month((this.getQuarter() - 1) * 3);
        break;
      case YEAR:
        this.hour(0, 0, 0, 0);
        this.date(1);
        this.month(0);
        break;
    }
    return this;
  }

  /**
   * Subtract time from date.
   * @param amount - Amount of units to subtract.
   * @param unit - Unit of time the amount is for. Default is milliseconds.
   */
  public subtract(amount: number, unit: string = 'milliseconds'): DateTime {
    return this.add((amount *= -1), unit);
  }

  /**
   * Get Date object.
   */
  public toDate(): Date {
    return new Date(this);
  }

  /**
   * Convert to UTC Date.
   */
  public toUTC(): DateTime {
    const datetime = new DateTime(
      Date.UTC(
        this.getUTCFullYear(),
        this.getUTCMonth(),
        this.getUTCDate(),
        this.getUTCHours(),
        this.getUTCMinutes(),
        this.getUTCSeconds(),
        this.getUTCMilliseconds()
      )
    );
    datetime._isUtc = true;
    return datetime;
  }

  /**
   * Check if DateTime object is in UTC mode
   */
  public isUTC(): boolean {
    return this._isUtc;
  }

  /**
   * Get unix timestamp (no milliseconds).
   */
  public unix(): number {
    return Math.floor(this.getTime() / MILLISECONDS_PER_SECOND);
  }

  /**
   * Get or set millisecond of date.
   * @param ms - Millisecond to set.
   */
  public millisecond(ms?: number): number | DateTime {
    if (ms !== undefined) {
      this.isUTC() ? this.setUTCMilliseconds(ms) : this.setMilliseconds(ms);
      return this;
    }
    return this.isUTC() ? this.getUTCMilliseconds() : this.getMilliseconds();
  }

  /**
   * Get or set second of date.
   * @param sec - Second to set.
   * @param ms - Millisecond to set.
   */
  public second(sec?: number, ms?: number): number | DateTime {
    if (sec !== undefined) {
      const setterName = this.isUTC() ? 'setUTCSeconds' : 'setSeconds';
      if (ms !== undefined) {
        this[setterName](sec, ms);
      } else {
        this[setterName](sec);
      }
      return this;
    }
    return this.isUTC() ? this.getUTCSeconds() : this.getSeconds();
  }

  /**
   * Get or set minute of date.
   * @param min - Minute to set.
   * @param sec - Second to set.
   * @param ms - Millisecond to set.
   */
  public minute(min?: number, sec?: number, ms?: number): number | DateTime {
    if (min !== undefined) {
      const setterName = this.isUTC() ? 'setUTCMinutes' : 'setMinutes';
      if (ms !== undefined) {
        this[setterName](min, sec, ms);
      } else if (sec !== undefined) {
        this[setterName](min, sec);
      } else {
        this[setterName](min);
      }
      return this;
    }
    return this.isUTC() ? this.getUTCMinutes() : this.getMinutes();
  }

  /**
   * Get or set hour of date.
   * @param hour - Hour to set.
   * @param min - Minute to set.
   * @param sec - Second to set.
   * @param ms - Millisecond to set.
   */
  public hour(
    hour?: number,
    min?: number,
    sec?: number,
    ms?: number
  ): number | DateTime {
    if (hour !== undefined) {
      const setterName = this.isUTC() ? 'setUTCHours' : 'setHours';
      if (ms !== undefined) {
        this[setterName](hour, min, sec, ms);
      } else if (sec !== undefined) {
        this[setterName](hour, min, sec);
      } else if (min !== undefined) {
        this[setterName](hour, min);
      } else {
        this[setterName](hour);
      }
      return this;
    }
    return this.isUTC() ? this.getUTCHours() : this.getHours();
  }

  /**
   * Get or set day in month of date.
   * @param date - Day in month to set.
   */
  public date(date?: number): number | DateTime {
    if (date !== undefined) {
      this.isUTC() ? this.setUTCDate(date) : this.setDate(date);
      return this;
    }
    return this.isUTC() ? this.getUTCDate() : this.getDate();
  }

  /**
   * Get or set month of date.
   * @param month - Month to set.
   * @param date - Day in month to set.
   */
  public month(month?: number, date?: number): number | DateTime {
    if (month !== undefined) {
      const setterName = this.isUTC() ? 'setUTCMonth' : 'setMonth';
      if (date !== undefined) {
        this[setterName](month, date);
      } else {
        this[setterName](month);
      }
      return this;
    }
    return this.isUTC() ? this.getUTCMonth() : this.getMonth();
  }

  /**
   * Get or set quarter of date.
   * @param quarter - Quarter to set.
   */
  public quarter(quarter?: number): number | DateTime {
    if (quarter !== undefined) {
      this.month((quarter - 1) * 3);
      return this;
    }
    return this.getQuarter();
  }

  /**
   * Get or set year of date.
   * @param year - Year to set.
   * @param month - Month to set.
   * @param date - Day in month to set.
   */
  public year(year?: number, month?: number, date?: number): number | DateTime {
    if (year !== undefined) {
      const setterName = this.isUTC() ? 'setUTCFullYear' : 'setFullYear';
      if (date !== undefined) {
        this[setterName](year, month, date);
      } else if (month !== undefined) {
        this[setterName](year, month);
      } else {
        this[setterName](year);
      }
      return this;
    }
    return this.isUTC() ? this.getUTCFullYear() : this.getFullYear();
  }

  /**
   * Get value of given unit.
   * @param unit - Unit of time
   */
  public get(unit: string): number {
    switch (normalizeUnit(unit)) {
      case MILLISECOND:
        // @ts-ignore
        return this.millisecond();
      case SECOND:
        // @ts-ignore
        return this.second();
      case MINUTE:
        // @ts-ignore
        return this.minute();
      case HOUR:
        // @ts-ignore
        return this.hour();
      case DAY:
        // @ts-ignore
        return this.date();
      case MONTH:
        // @ts-ignore
        return this.month();
      case QUARTER:
        // @ts-ignore
        return this.quarter();
      case YEAR:
        // @ts-ignore
        return this.year();
    }
    return 0;
  }

  /**
   * Set value of given unit.
   * @param value - Value to set unit to
   * @param unit - Unit of time the value is for. Default is milliseconds.
   */
  public set(value: number, unit: string = 'milliseconds'): DateTime {
    switch (normalizeUnit(unit)) {
      case MILLISECOND:
        this.millisecond(value);
        break;
      case SECOND:
        this.second(value);
        break;
      case MINUTE:
        this.minute(value);
        break;
      case HOUR:
        this.hour(value);
        break;
      case DAY:
        this.date(value);
        break;
      case MONTH:
        this.month(value);
        break;
      case QUARTER:
        this.quarter(value);
        break;
      case YEAR:
        this.year(value);
        break;
    }
    return this;
  }
}

/**
 * Get a DateTime object with current time or of initial value.
 * @param value - Date value to use.
 */
const local = (value?: string | number | Date | DateTime): DateTime => {
  return new DateTime(value);
};

/**
 * Get a DateTime object with current time or of initial value as UTC.
 * @param value - Date value to use.
 */
const utc = (value?: string | number | Date | DateTime): DateTime => {
  return new DateTime(value).toUTC();
};

local.utc = utc;

export = local;
