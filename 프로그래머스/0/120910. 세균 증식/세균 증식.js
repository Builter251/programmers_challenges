function solution(n, t) {
    let time = 1;
    while (time <= t) {
        n += n;
        time++;
    }
    return n;
}