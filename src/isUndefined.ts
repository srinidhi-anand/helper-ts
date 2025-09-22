import { Value } from "./types";

/**
 * function to work on the undefined
 * conditional check using the input value.
 * @param {Value} value
 * @returns boolean status of the undefined value if exists else returns false.
 */
function isUndefined(value: Value): boolean {
  return value === undefined || value === 'undefined';
}

export default isUndefined;
