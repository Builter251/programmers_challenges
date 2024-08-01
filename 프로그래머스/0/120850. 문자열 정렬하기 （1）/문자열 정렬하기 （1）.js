// 문자열을 한 글자마다 반복한다.
// 한 글자가 숫자인지 확인한다.
// 한 글자가 숫자면, 별도의 배열에 저장한다.
// 정수 배열을 오름차순으로 정렬한다.
function solution(my_string) {
    const ma = [...my_string];
    let numbers = [];
    for (let i = 0; i < ma.length; i++) {
        if (!isNaN(ma[i])) { // 문자가 숫자인지 확인
            numbers.push(Number(ma[i])); // 숫자형으로 변환하여 배열에 추가
        }
    }
    
    numbers.sort((a, b) => a - b); // 오름차순 정렬
    return numbers;
}