/**
 * Test suite for the `isNullLike` function.
 *
 * Purpose: This file contains functional test cases for the `isNullLike` utility function.
 * Target function(s): `isNullLike`
 * Functional areas covered:
 * - D:\packages\helper-ts\src\isNullLike.ts
 * - Validation of `null` and `undefined` values.
 * - Validation of various non-null-like primitive and object values.
 * High-level scenarios validated:
 * - Correctly identifying `null` and `undefined` as null-like.
 * - Correctly identifying various non-null and non-undefined values as not null-like, including empty strings, empty arrays, empty objects, zero, false, NaN, and other data types.
 */

// IMPORTANT: VERIFY IMPORT STYLE.
// The following import assumes a named export: 'export function isNullLike(...)', 'export const isNullLike = ...', or 'export { isNullLike }'.
// If the source uses 'export default', change to: 'import isNullLike from "../src/isNullLike";'
// If the source uses 'module.exports = isNullLike', change to: 'const isNullLike = require("../src/isNullLike");'
// If the source uses 'exports.isNullLike = ...', change to: 'const { isNullLike } = require("../src/isNullLike");'
import isNullLike from "../../../src/isNullLike";

describe("isNullLike", () => {
  // BeforeAll and AfterAll hooks are placed at the very start of the test file.
  beforeAll(() => {
    // Optional: Setup for all tests, e.g., mock global objects or initialize resources.
    // For a pure utility function like isNullLike, typically no setup is needed.
  });

  afterAll(() => {
    // Optional: Teardown for all tests, e.g., clean up mocked objects or dispose resources.
    // For a pure utility function like isNullLike, typically no teardown is needed.
  });

  /**
   * Tests if the function correctly identifies `null` as null-like.
   * Input conditions: `null`
   * Expected outcome: `true`
   * Functional scenarios covered: Positive, Edge case, Valid input
   */
  test("should return true for null", () => {
    const result: boolean = isNullLike(null);
    expect(result).toBe(true);
  });

  /**
   * Tests if the function correctly identifies `undefined` as null-like.
   * Input conditions: `undefined`
   * Expected outcome: `true`
   * Functional scenarios covered: Positive, Edge case, Valid input
   */
  test("should return true for undefined", () => {
    const result: boolean = isNullLike(undefined);
    expect(result).toBe(true);
  });

  /**
   * Tests if the function correctly identifies an empty string as not null-like.
   * Input conditions: `''` (empty string)
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Edge case, Boundary value
   */
  test("should return false for an empty string", () => {
    const result: boolean = isNullLike("");
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies a non-empty string as not null-like.
   * Input conditions: `'hello'`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Valid input
   */
  test("should return false for a non-empty string", () => {
    const result: boolean = isNullLike("hello");
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies the number `0` as not null-like.
   * Input conditions: `0`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Edge case, Boundary value
   */
  test("should return false for the number 0", () => {
    const result: boolean = isNullLike(0);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies a positive number as not null-like.
   * Input conditions: `123`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Valid input
   */
  test("should return false for a positive number", () => {
    const result: boolean = isNullLike(123);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies a negative number as not null-like.
   * Input conditions: `-45`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Valid input
   */
  test("should return false for a negative number", () => {
    const result: boolean = isNullLike(-45);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies `false` boolean as not null-like.
   * Input conditions: `false`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Edge case, Boundary value
   */
  test("should return false for boolean false", () => {
    const result: boolean = isNullLike(false);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies `true` boolean as not null-like.
   * Input conditions: `true`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Valid input
   */
  test("should return false for boolean true", () => {
    const result: boolean = isNullLike(true);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies `NaN` (Not-a-Number) as not null-like.
   * Input conditions: `NaN`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Edge case, Boundary value
   */
  test("should return false for NaN", () => {
    const result: boolean = isNullLike(NaN);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies an empty array as not null-like.
   * Input conditions: `[]` (empty array)
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Edge case, Boundary value
   */
  test("should return false for an empty array", () => {
    const result: boolean = isNullLike([]);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies a non-empty array as not null-like.
   * Input conditions: `[1, 2, 3]`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Valid input
   */
  test("should return false for a non-empty array", () => {
    const result: boolean = isNullLike([1, 2, 3]);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies an empty object as not null-like.
   * Input conditions: `{}` (empty object)
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Edge case, Boundary value
   */
  test("should return false for an empty object", () => {
    const result: boolean = isNullLike({});
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies a non-empty object as not null-like.
   * Input conditions: `{ key: 'value' }`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Valid input
   */
  test("should return false for a non-empty object", () => {
    const result: boolean = isNullLike({ key: "value" });
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies a function as not null-like.
   * Input conditions: `() => {}` (an anonymous function)
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Valid input
   */
  test("should return false for a function", () => {
    const testFunction = (): void => {};
    const result: boolean = isNullLike(testFunction);
    expect(result).toBe(false);
  });

  /**
   * Tests if the function correctly identifies a Symbol as not null-like.
   * Input conditions: `Symbol('test')`
   * Expected outcome: `false`
   * Functional scenarios covered: Negative, Valid input, Edge case
   */
  test("should return false for a Symbol", () => {
    const result: boolean = isNullLike(Symbol("test"));
    expect(result).toBe(false);
  });
});
