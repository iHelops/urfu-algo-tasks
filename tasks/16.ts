// https://leetcode.com/problems/single-number/description/

function singleNumber(nums: number[]): number | null {
    if (nums.length === 1) return nums[0];

    for (let i = 0; i < nums.length; i++) {
        let count: number = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) count++;
        }
        if (count === 1) return nums[i];
    }

    return null;
}
