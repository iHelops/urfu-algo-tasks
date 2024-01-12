// https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number, map = new Map()): number[] {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let count = map.get(num) || 0;

        map.set(num, count + 1);
    }

    let arr = Array.from(map, ([key, value]) => [key, value]);
    arr.sort((a, b) => b[1] - a[1]);

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }

    return result;
}
