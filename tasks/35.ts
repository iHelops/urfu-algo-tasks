// https://www.codewars.com/kata/557f6437bf8dcdd135000010

function factorial(n: number){
    if (n < 0) return null;

    let result = [1];

    for (let i = 1; i <= n; i++) {
        let carry = 0;

        for (let j = 0; j < result.length; j++) {
            let temp = result[j] * i + carry;
            result[j] = temp % 10;
            carry = Math.floor(temp / 10);
        }

        while (carry > 0) {
            result.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }

    return result.reverse().join("");
}
