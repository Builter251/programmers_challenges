/**
조합 dots의 4C2
4C2의 기울기 구하기
기울기 배열에서 같은 값 찾기
*/

function solution(dots) {
    // 두 점 간의 기울기를 구하는 함수
    function getSlope(dot1, dot2) {
        const [x1, y1] = dot1;
        const [x2, y2] = dot2;
        return (y2 - y1) / (x2 - x1);
    }

    // 가능한 모든 조합의 기울기를 비교
    const slopes = [
        getSlope(dots[0], dots[1]),
        getSlope(dots[0], dots[2]),
        getSlope(dots[0], dots[3]),
        getSlope(dots[1], dots[2]),
        getSlope(dots[1], dots[3]),
        getSlope(dots[2], dots[3])
    ];

    // 기울기 배열에서 중복된 값이 있으면 평행한 두 직선이 존재
    return slopes[0] === slopes[5] || 
           slopes[1] === slopes[4] || 
           slopes[2] === slopes[3] ? 1 : 0;
}