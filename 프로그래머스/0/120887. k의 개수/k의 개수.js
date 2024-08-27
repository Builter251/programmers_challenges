function solution(i, j, k) {
    const numbers = [];
    for (let h = i; h <= j; h++) {
        numbers.push(h);
    }

    return numbers.reduce(function (acc, cur) {
        const count = cur.toString().split('').filter(char => char === k.toString()).length;
        return acc + count;
    }, 0);
}