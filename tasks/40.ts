// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a: number[], b: number[]) {
    let arr = [];

    for(let i = 0; i < a.length; i++){
        if(b.indexOf(a[i]) < 0) arr.push(a[i]);
    }

    return arr;
}
