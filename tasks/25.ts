// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(string: string){
    const arr = string.split(' ')

    return arr.map(item => {
        if (item.length >= 5) {
            return item.split('').reverse().join('')
        } else return item
    }).join(' ')
}
