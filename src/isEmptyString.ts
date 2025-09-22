import { Value } from "./types";

/**
 * function to work on the empty string
 * conditional check using the input value.
 * @param {*} value
 * @returns boolean status of the empty string value if exists else returns false.
 */
function isEmpty(value: Value): boolean {
  if (typeof value !== 'string') {
    return false;
  }
  return value === '' || value === 'null' || value === 'undefined';
}

export default isEmpty;
