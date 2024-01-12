// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n: number){
    const arr = n.toString().split('')
    const res = arr.sort((a, b) => +a - +b).reverse()
    return parseInt(res.join(''))
}
