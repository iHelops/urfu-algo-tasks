// https://leetcode.com/problems/binary-search/description/

function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        const mid = Math.round((low + high) / 2);
        if (nums[mid] > target) high = mid - 1;
        else low = mid;
    }

    return nums[low] == target ? low : -1;
}
