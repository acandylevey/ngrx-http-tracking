export const isDefined = <T>(val: T): val is T =>
  val !== null && val !== undefined;
