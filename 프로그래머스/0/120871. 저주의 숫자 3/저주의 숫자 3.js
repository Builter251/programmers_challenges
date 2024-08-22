function solution(n) {
    let count = 0;
    let value = 0;

    while (count < n) {
        value++;
        if (value % 3 !== 0 && !String(value).includes('3')) {
            count++;
        }
    }

    return value;
}
