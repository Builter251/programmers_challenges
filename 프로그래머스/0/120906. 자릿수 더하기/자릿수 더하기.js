function solution(n) {
    return [...n.toString()].reduce((a, c) => a + Number(c), 0);
}