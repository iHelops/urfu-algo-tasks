// https://leetcode.com/problems/majority-element/description/

function majorityElement(nums: number[]) {
    for (let i = 0; i < nums.length;) {
        let count = nums.filter(num => num === nums[i]).length;
        if (count > nums.length / 2) return nums[i];
        i += count;
    }
}
