// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

function twoSumNumbers(numbers: number[], target: number) {
    let [left, right] = [0, numbers.length - 1];

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];
        else if (sum > target) right--;
        else left++;
    }
}
