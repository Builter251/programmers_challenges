function solution(n) {
    const divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i); // i가 n의 약수라면 배열에 추가합니다.
        }
    }
    return divisors;
}
