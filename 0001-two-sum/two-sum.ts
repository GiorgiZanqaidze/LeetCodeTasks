// 1. Two Sum — https://leetcode.com/problems/two-sum/
// Pattern: complement + hash map. Notes: Obsidian → Algorithms/1 - Two Sum

/** Brute force: every pair once. O(n²) time, O(1) space. */
export function twoSumBrute(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

/** One pass with a map of value → index. O(n) time, O(n) space. */
export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>(); // holds only indices < i

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need)!, i]; // .has — index 0 is falsy
    seen.set(nums[i], i); // store AFTER checking, so a hit is never the same index
  }
  return [];
}
