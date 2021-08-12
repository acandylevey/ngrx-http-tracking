export const isDefined = <T>(val: T): val is T => val !== null && val !== undefined;
export const isError = (value: any): value is Error => isDefined(value) && value.name && value.message;