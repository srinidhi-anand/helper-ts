import { Value } from "./types/interface";

/**
 * Checks if a value is null-like,
 * meaning it is either null, undefined, or a empty string
 * that matches a null-like value.
 * @param {Value} value - The value to check.
 * @returns {boolean} - Returns true if the value is null-like, otherwise false.
 */
function isNullLike(value: Value): boolean {
  if (value === null || value === undefined) return true;

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return ["null", "undefined"].includes(normalized);
  }

  return false;
}

export default isNullLike;
