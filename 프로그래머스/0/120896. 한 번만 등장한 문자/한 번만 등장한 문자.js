function solution(s) {
    // 문자열 s를 배열로 변환하여 각 문자를 배열의 요소로 만듭니다.
    const a = [...s];

    // reduce를 사용하여 각 문자의 빈도를 계산하여 객체 f에 저장합니다.
    // 예를 들어, s가 'apple'이라면 f는 { a: 1, p: 2, l: 1, e: 1 }와 같이 됩니다.
    const f = a.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1; // 현재 문자의 빈도가 없으면 0으로 초기화하고, 그 후 1을 더합니다.
        return acc; // 누적 객체를 반환하여 다음 반복에 사용할 수 있도록 합니다.
    }, {}); // 빈 객체 {}를 초기값으로 설정합니다.

    // 객체 f에서 값이 1인 키(문자)만 필터링하여 배열로 만듭니다.
    const matchingKeys = Object.entries(f)
        .filter(([key, value]) => value === 1) // 값이 1인 키-값 쌍만 필터링합니다.
        .map(([key, value]) => key); // 필터링된 키-값 쌍 중 키(문자)만을 배열로 추출합니다.

    // 추출된 키(문자)를 사전 순으로 정렬한 후, 문자열로 결합하여 반환합니다.
    return matchingKeys.sort().join('');
    // 예를 들어, 'apple'에서 한 번만 등장하는 문자 'a', 'l', 'e'를 사전 순으로 정렬하면 'ael'이 됩니다.
}