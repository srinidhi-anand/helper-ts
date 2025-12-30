import { Value } from "./types/interface";

/**
 * Check if a string is empty or contains only whitespace (including Unicode invisible characters)
 * @param value The value to check
 * @returns true if string is empty or contains only whitespace/invisible characters
 */
function isEmptyString(value: Value): boolean {
  if (typeof value !== "string") {
    return false;
  }
  if (value.trim() === "") return true;

  // Remove all standard whitespace + NBSP + zero-width + other common invisible chars
  const cleaned = value.replace(
    /[\s\u00A0\u1680\u180E\u2000-\u200D\u202F\u205F\u2060\uFEFF]/g,
    ""
  );

  if (cleaned.length === 0) return true;

  return false;
}

export default isEmptyString;
