/**
 * Purpose: Functional tests for the `isNull` utility function.
 * Target function(s): `isNull`
 * Functional areas covered:
 *   - Correctly identifies `null` values.
 *   - Correctly identifies non-`null` values across various data types (primitives, objects, arrays, functions, symbols, BigInts).
 *   - Handles edge cases like `undefined`, `0`, `false`, `NaN`, empty strings/objects/arrays.
 * Folder Path: D:\packages\helper-ts\src
 * File Path: D:\packages\helper-ts\src\isNull
 * High-level scenarios validated:
 *   - Positive verification for `null`.
 *   - Negative verification for all other falsy and truthy values.
 *   - Comprehensive type coverage to ensure strict `null` check.
 */

// IMPORTANT: Verify the import style based on how 'isNull' is exported in the source file (D:\packages\helper-ts\src\isNull).
// If 'export default', use: import isNull from '../src/isNull';
// If 'export { isNull }' or 'export function isNull() {}', use: import { isNull } from '../src/isNull';
// If 'module.exports = isNull', use: const isNull = require('../src/isNull');
// If 'exports.isNull = ...', use: const { isNull } = require('../src/isNull');
import isNull from "../../../src/isNull"; // Assuming named export for a utility function

describe("isNull", () => {
  // `beforeAll` and `afterAll` hooks are generally used for setup/teardown of shared resources.
  // For a pure function like `isNull` that operates on its inputs without side effects,
  // these hooks are typically not required for functional testing, as each test is self-contained.

  /**
   * Test Case: Verifies that `isNull` correctly identifies an explicit `null` value.
   * Input Conditions: A variable explicitly set to `null`.
   * Expected Outcome: Returns `true`.
   * Functional Scenarios Covered: Positive functional test case.
   */
  it("should return true for an explicit null value", () => {
    const value: null = null;
    expect(isNull(value)).toBe(true);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for `undefined`.
   * Input Conditions: A variable explicitly set to `undefined`.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case, edge case.
   */
  it("should return false for an undefined value", () => {
    const value: undefined = undefined;
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for the number `0`.
   * Input Conditions: The number `0`.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case, edge case, boundary value (numerical).
   */
  it("should return false for the number 0", () => {
    const value: number = 0;
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a positive integer.
   * Input Conditions: A positive integer (e.g., `123`).
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a positive number", () => {
    const value: number = 123;
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a negative integer.
   * Input Conditions: A negative integer (e.g., `-123`).
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a negative number", () => {
    const value: number = -123;
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a floating-point number.
   * Input Conditions: A floating-point number (e.g., `3.14`).
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a floating-point number", () => {
    const value: number = 3.14;
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for boolean `false`.
   * Input Conditions: The boolean literal `false`.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case, edge case.
   */
  it("should return false for boolean false", () => {
    const value: boolean = false;
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for boolean `true`.
   * Input Conditions: The boolean literal `true`.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for boolean true", () => {
    const value: boolean = true;
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for an empty string.
   * Input Conditions: An empty string literal `''`.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case, edge case.
   */
  it("should return false for an empty string", () => {
    const value: string = "";
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a non-empty string.
   * Input Conditions: A string with content (e.g., `'hello'`).
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a non-empty string", () => {
    const value: string = "hello";
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for an empty object.
   * Input Conditions: An empty object literal `{}`.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case, edge case.
   */
  it("should return false for an empty object", () => {
    const value: object = {};
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a non-empty object.
   * Input Conditions: An object with properties (e.g., `{ a: 1 }`).
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a non-empty object", () => {
    const value: { a: number } = { a: 1 };
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for an empty array.
   * Input Conditions: An empty array literal `[]`.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case, edge case.
   */
  it("should return false for an empty array", () => {
    const value: unknown[] = [];
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a non-empty array.
   * Input Conditions: An array with elements (e.g., `[1, 2, 3]`).
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a non-empty array", () => {
    const value: number[] = [1, 2, 3];
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a function.
   * Input Conditions: A simple arrow function.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a function", () => {
    const value: Function = () => {
      /* no-op */
    };
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for `NaN` (Not-a-Number).
   * Input Conditions: The global `NaN` value.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case, edge case.
   */
  it("should return false for NaN", () => {
    const value: number = NaN;
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a Symbol.
   * Input Conditions: A unique Symbol value.
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a Symbol", () => {
    const value: symbol = Symbol("test");
    expect(isNull(value)).toBe(false);
  });

  /**
   * Test Case: Verifies that `isNull` returns `false` for a BigInt.
   * Input Conditions: A BigInt value (e.g., `1n`).
   * Expected Outcome: Returns `false`.
   * Functional Scenarios Covered: Negative functional test case.
   */
  it("should return false for a BigInt", () => {
    const value: bigint = 1n;
    expect(isNull(value)).toBe(false);
  });
});
