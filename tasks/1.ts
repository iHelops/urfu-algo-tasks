// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9));
