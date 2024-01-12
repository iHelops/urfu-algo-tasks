// https://leetcode.com/problems/powx-n/description/

function myPow(x: number, n: number): number {
    if (x === 1) return x;
    if (x === -1) return n % 2 === 0 ? -x : x;

    let res = 1;

    for (let i = 0; i < Math.abs(n); i++) {
        res *= x;
    }

    return n < 0 ? 1 / res : res;
}
