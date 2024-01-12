// https://www.codewars.com/kata/58f6000bc0ec6451960000fd

function selReverse(array: string[], length: number) {
    if (length === 0 ) return array;
    if (length > array.length) return array.reverse();

    const reversed = []

    for (let i = 0; i < array.length; i += length) {
        for (let j = i + length; i < j; j--) {
            const num = array[j - 1];
            if (num !== undefined) reversed.push(num);
        }
    }

    return reversed
}
