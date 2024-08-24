/**
n과 가까운 수 = n과의 거리 = |n-k|
numlist -> k: |n-k|의 자료구조
|n-k|가 동일한 k, k'가 있을 때 k > k' 이면 k먼저 배치
*/
function solution(numlist, n) {
    let obj = {};
    numlist.forEach((num) => {
        obj[num] = Math.abs(n - num);
    });

    // 객체의 entries를 배열로 변환한 후, 값을 기준으로 오름차순 정렬
    let sortedArray = Object.entries(obj).sort((a, b) => {
        if (a[1] === b[1]) {
            // 절대값 차이가 같으면, 원래의 숫자가 큰 순서로 정렬
            return b[0] - a[0];
        } else {
            // 절대값 차이가 다르면, 절대값 차이에 따라 오름차순 정렬
            return a[1] - b[1];
        }
    });

    // 정렬된 배열에서 키를 추출하여 최종 배열을 생성
    let sortedNumlist = sortedArray.map(entry => parseInt(entry[0]));

    return sortedNumlist;
}
