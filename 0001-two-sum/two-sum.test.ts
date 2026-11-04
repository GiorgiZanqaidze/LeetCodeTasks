import { describe, it, expect } from "vitest";
import { twoSum, twoSumBrute } from "./two-sum";

const cases: [number[], number, number[]][] = [
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],   // same element twice is not allowed
  [[3, 3], 6, [0, 1]],      // same value, different indices is fine
];

describe.each([
  ["twoSum (hash map)", twoSum],
  ["twoSumBrute", twoSumBrute],
])("%s", (_name, fn) => {
  it.each(cases)("nums=%j target=%i → %j", (nums, target, expected) => {
    expect(fn(nums, target)).toEqual(expected);
  });
});
