// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
    const numsSet = new Set(nums);
    const isEqual = numsSet.size === nums.length;
    return !isEqual;
}
