// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88

function add(n: number){
    const func = (x: number) => add(x + n);
    func.valueOf = () => n;
    return func;
}

console.log(add(10)(5).valueOf)
