import { is } from '@onesy/utils';

export type TOnesyStackValue = Array<any>;

export default class OnesyStack {
  public value: TOnesyStackValue = [];
  public limit = 1e9;

  public constructor(
    value: TOnesyStackValue,
    limit: number
  ) {
    if (is('array', value)) this.value = value;

    if (is('number', limit)) this.limit = limit;
  }

  get length() { return this.value.length; }

  get first() { return this.value[0]; }

  get peak() { return this.first; }

  get empty() { return this.length === 0; }

  get full() { return this.length === this.limit; }

  public push(...values: TOnesyStackValue): boolean {
    for (const value of values) {
      if (this.length >= this.limit) return false;

      this.value.unshift(value);
    }

    return true;
  }

  public pop(): any {
    return this.value.shift();
  }

  public clear(): OnesyStack {
    this.value = [];

    return this;
  }
}
