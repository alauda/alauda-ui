export function coerceString(val: any): string {
  return val === undefined || val === null ? '' : val.toString();
}

export function coerceAttrBoolean(val: any): boolean {
  return val === '' ? true : !!val;
}

export function coerceNumber(val: any, fallbackValue = 0): number {
  return _isNumberValue(val) ? Number(val) : fallbackValue;
}

export function _isNumberValue(value: any): boolean {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
