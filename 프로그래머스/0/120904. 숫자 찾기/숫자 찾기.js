function solution(num, k) {
    const index = Array.from(num.toString()).indexOf(k.toString());
    return index === -1 ? -1 : index + 1;
}
