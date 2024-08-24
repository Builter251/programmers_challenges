function solution(a, b) {
    // 최대공약수를 구하는 함수
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 기약분수로 만들기
    const divisor = gcd(a, Math.abs(b));
    b = Math.abs(b) / divisor;

    // 분모의 소인수 중 2와 5 제거
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    // 분모가 1이면 유한소수, 아니면 무한소수
    return b === 1 ? 1 : 2;
}