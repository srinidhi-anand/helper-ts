import { Value } from "./types/interface";

/**
 * function to work on the null
 * conditional check using the input value.
 * @param {Value} value
 * @returns boolean status of the null value if exists else returns false.
 */
function isNull(value: Value | unknown | unknown[]): boolean {
  return value === null;
}

export default isNull;
