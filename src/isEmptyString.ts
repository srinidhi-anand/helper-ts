import { Value } from "./types/interface";

/**
 * function to work on the empty string
 * conditional check using the input value.
 * @param {*} value
 * @returns boolean status of the empty string value if exists else returns false.
 */
function isEmptyString(value: Value): boolean {
  if (typeof value !== "string") {
    return false;
  }
  if (value === "") return true;
  return /^[ ]+$/.test(value);
}

export default isEmptyString;
