// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr: string[], k: number) {
    const arr = [];

    for (let i = 0; i < strarr.length - (k - 1); i++) {
        let str = '';
        for (let j = 0; j < k; j++) {
            str += strarr[i + j];
        }

        arr.push(str);
    }

    return arr.reduce((acc, value) => {
        if (value.length > acc.length) return value;
        return acc;
    }, arr[0]) || ''
}
