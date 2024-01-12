// https://leetcode.com/problems/remove-element/description/

function removeElement(nums: number[], val: number): number {
    for (let i = 0; i < nums.length;) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            continue;
        }

        i++;
    }

    return nums.length;
}
