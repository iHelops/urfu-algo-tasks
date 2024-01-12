// @ts-nocheck
// https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3


Array.prototype.reduce = function(process, initial) {
    let acc = initial || this[0];

    for (let i = initial ? 0 : 1; i < this.length; i++) {
        acc = process(acc, this[i], this);
    }

    return acc;
}
