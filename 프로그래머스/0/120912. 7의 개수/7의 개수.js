// array 요소를 하나씩 꺼낸다.
// 요소에 7이 몇 개 있는지 확인한다.
// 요소마다 7의 개수를 누산한다
// 결과를 반환한다.
function solution(array) {
    let result = 0;
    for(let num of array) {
        let num2 = num.toString().split('');
        result += num2.reduce((a,c) => c === '7' ? a+1 : a ,0);
    }
    return result;
}