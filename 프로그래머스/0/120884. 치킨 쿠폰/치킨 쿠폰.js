// 치킨 수 === 쿠폰 수
// 쿠폰 수 / 10
function solution(chicken) {
    function recursiveChicken(coupons) {
        // 쿠폰이 10장 미만이면 서비스 치킨을 더 받을 수 없으므로 종료
        if (coupons < 10) {
            return 0;
        }

        // 현재 쿠폰으로 받을 수 있는 서비스 치킨 수
        let serviceChickens = Math.floor(coupons / 10);

        // 남은 쿠폰 수 (서비스 치킨을 받은 후 남은 쿠폰 + 서비스 치킨으로 새로 발급된 쿠폰)
        let remainingCoupons = (coupons % 10) + serviceChickens;

        // 서비스 치킨 수와 재귀 호출 결과를 합산
        return serviceChickens + recursiveChicken(remainingCoupons);
    }

    // 초기 시킨 치킨 수는 곧 초기 쿠폰 수와 동일하므로, 그 값을 재귀 함수에 전달
    return recursiveChicken(chicken);
}