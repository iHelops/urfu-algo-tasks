// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr: number[]) {
    let zeroCount = 0;

    arr.forEach(value => {
        if (value === 0) zeroCount++
    })

    const arrWithoutZero = arr.filter(value => value !== 0);

    for (let i = 0; i < zeroCount; i++) {
        arrWithoutZero.push(0);
    }

    return arrWithoutZero
}
