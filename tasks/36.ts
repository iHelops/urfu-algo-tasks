function checkchoose(m: number, n: number) {
    let x = 1;

    for (let i = 1; i<= n; i++) {
        x = (x * (n + 1 - i) / i);
        if (x === m) return i;
    }

    return -1;
}
