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

class DateTime extends Date {
  constructor(value?: string | number | Date | DateTime) {
    value ? super(value) : super();
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
        this.setDate(this.getDate() + amount);
        break;
      case MONTH:
        this.setMonth(this.getMonth() + amount);
        break;
      case QUARTER:
        this.setMonth(this.getMonth() + amount * 3);
        break;
      case YEAR:
        this.setFullYear(this.getFullYear() + amount);
        break;
    }
    return this;
  }

  /**
   * Create copy of DateTime.
   */
  public clone(): DateTime {
    return new DateTime(this);
  }

  /**
   * Get number of days in month.
   */
  public daysInMonth(): number {
    return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
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
  public diff(date: Date | DateTime, unit: string = 'milliseconds'): number {
    switch (normalizeUnit(unit)) {
      case MILLISECOND:
        return this.getTime() - date.getTime();
      case SECOND:
        return Math.floor(
          (this.getTime() - date.getTime()) / MILLISECONDS_PER_SECOND
        );
      case MINUTE:
        return Math.floor(
          (this.getTime() - date.getTime()) / MILLISECONDS_PER_MINUTE
        );
      case HOUR:
        return Math.floor(
          (this.getTime() - date.getTime()) / MILLISECONDS_PER_HOUR
        );
      case DAY:
        return Math.floor(
          (Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()) -
            Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) /
          MILLISECONDS_PER_DAY
        );
      case MONTH:
        return (
          (this.getFullYear() - date.getFullYear()) * 12 +
          this.getMonth() -
          date.getMonth()
        );
      case QUARTER:
        return (
          (this.getFullYear() - date.getFullYear()) * 4 +
          this.getQuarter() -
          new DateTime(date).getQuarter()
        );
      case YEAR:
        return this.getFullYear() - date.getFullYear();
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
        this.setMilliseconds(999);
        break;
      case MINUTE:
        this.setSeconds(59, 999);
        break;
      case HOUR:
        this.setMinutes(59, 59, 999);
        break;
      case DAY:
        this.setHours(23, 59, 59, 999);
        break;
      case MONTH:
        this.setHours(23, 59, 59, 999);
        this.setDate(this.daysInMonth());
        break;
      case QUARTER:
        this.setDate(1);
        this.setHours(23, 59, 59, 999);
        this.setMonth(this.getQuarter() * 3 - 1);
        this.setDate(this.daysInMonth());
        break;
      case YEAR:
        this.setHours(23, 59, 59, 999);
        this.setMonth(11);
        this.setDate(31)
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
          return `${this.getFullYear()}`.slice(-2);
        case 'YYYY':
          return `${this.getFullYear()}`;
        case 'M':
          return `${this.getMonth() + 1}`;
        case 'MM':
          return padStart(this.getMonth() + 1);
        case 'MMM':
          return this.toLocaleDateString(locale, { month: 'short' });
        case 'MMMM':
          return this.toLocaleDateString(locale, { month: 'long' });
        case 'D':
          return `${this.getDate()}`;
        case 'DD':
          return padStart(this.getDate());
        case 'H':
          return `${this.getHours()}`;
        case 'HH':
          return padStart(this.getHours());
        case 'h':
          return this.getHours() === 0
            ? '12'
            : this.getHours() < 13
              ? `${this.getHours()}`
              : `${this.getHours() - 12}`;
        case 'hh':
          return this.getHours() === 0
            ? '12'
            : this.getHours() < 13
              ? padStart(this.getHours())
              : padStart(this.getHours() - 12);
        case 'a':
          return this.getHours() < 12 ? 'am' : 'pm';
        case 'A':
          return this.getHours() < 12 ? 'AM' : 'PM';
        case 'm':
          return `${this.getMinutes()}`;
        case 'mm':
          return padStart(this.getMinutes());
        case 's':
          return `${this.getSeconds()}`;
        case 'ss':
          return `${padStart(this.getSeconds())}`;
        case 'SSS':
          const ms = this.getMilliseconds();
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
    return Math.floor(this.getMonth() / 3) + 1;
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
    switch (normalizeUnit(unit, true)) {
      case MILLISECOND:
        return diff > 0;
      case SECOND: {
        return diff >= MILLISECONDS_PER_SECOND || !this.isSame(date, SECOND);
      }
      case MINUTE:
        return diff >= MILLISECONDS_PER_MINUTE || !this.isSame(date, MINUTE);
      case HOUR:
        return diff >= MILLISECONDS_PER_HOUR || !this.isSame(date, HOUR);
      case DAY:
        return diff >= MILLISECONDS_PER_DAY || !this.isSame(date, DAY);
      case MONTH:
        return (
          this.getFullYear() - date.getFullYear() > 0 ||
          this.getMonth() > date.getMonth()
        );
      case QUARTER:
        return (
          this.getFullYear() - date.getFullYear() > 0 ||
          this.getQuarter() > new DateTime(date).getQuarter()
        );
      case YEAR:
        return this.getFullYear() > date.getFullYear();
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
    return (
      this.getTime() !== date.getTime() &&
      new DateTime(date).isAfter(this, unit)
    );
  }

  /**
   * Check if date is leap year.
   */
  public isLeapYear(): boolean {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  /**
   * Check if date is same than given date depending on unit of time.
   * @param date - The date to compare with.
   * @param unit - Unit of time. Default is milliseconds.
   */
  public isSame(date: Date | DateTime, unit = 'milliseconds'): boolean {
    switch (normalizeUnit(unit, true)) {
      case MILLISECOND:
        return this.getTime() === date.getTime();
      case SECOND:
        return (
          this.clone()
            .startOf(SECOND)
            .getTime() === new DateTime(date).startOf(SECOND).getTime()
        );
      case MINUTE:
        return (
          this.clone()
            .startOf(MINUTE)
            .getTime() === new DateTime(date).startOf(MINUTE).getTime()
        );
      case HOUR:
        return (
          this.clone()
            .startOf(HOUR)
            .getTime() === new DateTime(date).startOf(HOUR).getTime()
        );
      case DAY:
        return (
          this.clone()
            .startOf(DAY)
            .getTime() === new DateTime(date).startOf(DAY).getTime()
        );
      case MONTH:
        return (
          this.getFullYear() === date.getFullYear() &&
          this.getMonth() === date.getMonth()
        );
      case QUARTER:
        return (
          this.clone()
            .startOf(QUARTER)
            .getTime() === new DateTime(date).startOf(QUARTER).getTime()
        );
      case YEAR:
        return this.getFullYear() === date.getFullYear();
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
        this.setMilliseconds(0);
        break;
      case MINUTE:
        this.setSeconds(0, 0);
        break;
      case HOUR:
        this.setMinutes(0, 0, 0);
        break;
      case DAY:
        this.setHours(0, 0, 0, 0);
        break;
      case MONTH:
        this.setHours(0, 0, 0, 0);
        this.setDate(1);
        break;
      case QUARTER:
        this.setHours(0, 0, 0, 0);
        this.setDate(1);
        this.setMonth((this.getQuarter() - 1) * 3);
        break;
      case YEAR:
        this.setHours(0, 0, 0, 0);
        this.setDate(1);
        this.setMonth(0);
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
    return new DateTime(
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
      this.setMilliseconds(ms);
      return this;
    }
    return this.getMilliseconds();
  }

  /**
   * Get or set second of date.
   * @param sec - Second to set.
   * @param ms - Millisecond to set.
   */
  public second(sec?: number, ms?: number): number | DateTime {
    if (sec !== undefined) {
      this.setSeconds(sec, ms);
      return this;
    }
    return this.getSeconds();
  }

  /**
   * Get or set minute of date.
   * @param min - Minute to set.
   * @param sec - Second to set.
   * @param ms - Millisecond to set.
   */
  public minute(min?: number, sec?: number, ms?: number): number | DateTime {
    if (min !== undefined) {
      this.setMinutes(min, sec, ms);
      return this;
    }
    return this.getMinutes();
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
      this.setHours(hour, min, sec, ms);
      return this;
    }
    return this.getHours();
  }

  /**
   * Get or set day in month of date.
   * @param date - Day in month to set.
   */
  public date(date?: number): number | DateTime {
    if (date !== undefined) {
      this.setDate(date);
      return this;
    }
    return this.getDate();
  }

  /**
   * Get or set month of date.
   * @param month - Month to set.
   * @param date - Day in month to set.
   */
  public month(month?: number, date?: number): number | DateTime {
    if (month !== undefined) {
      this.setMonth(month, date);
      return this;
    }
    return this.getMonth();
  }

  /**
   * Get or set quarter of date.
   * @param quarter - Quarter to set.
   */
  public quarter(quarter?: number): number | DateTime {
    if (quarter !== undefined) {
      this.setMonth((quarter - 1) * 3);
      return this;
    }
    return this.getFullYear();
  }

  /**
   * Get or set year of date.
   * @param year - Year to set.
   * @param month - Month to set.
   * @param date - Day in month to set.
   */
  public year(year?: number, month?: number, date?: number): number | DateTime {
    if (year !== undefined) {
      this.setFullYear(year, month, date);
      return this;
    }
    return this.getFullYear();
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
