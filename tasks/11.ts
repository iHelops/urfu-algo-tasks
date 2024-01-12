// https://leetcode.com/problems/reverse-integer/description/

const MAX = 2147483647;
const MIN = -2147483648;

function reverse(x: number): number {
    let parsed = parseInt(x.toString().split('').reverse().join(''));
    if (x < 0) parsed *= -1;
    if (parsed > MAX || parsed < MIN) return 0;
    return parsed;
}
