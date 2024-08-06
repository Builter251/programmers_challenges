// 가장 큰 숫자와 나머지 숫자를 구분하는 방법?

function solution(sides) {
    const sorted = sides.sort((a,b) => b-a);
    return sorted[0] < sorted[1] + sorted[2] ? 1 : 2;
}