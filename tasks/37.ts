// @ts-nocheck
// https://www.codewars.com/kata/5426d7a2c2c7784365000783

function balancedParens(n: number) {
    if (n === 0) return [""];

    const results = [];

    for (let i = 0; i < n; i++) {
        for (const left of balancedParens(i)) {
            for (const right of balancedParens(n - i - 1)) {
                results.push(`(${left})${right}`);
            }
        }
    }

    return results;
}
