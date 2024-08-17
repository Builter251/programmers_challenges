// 중복 제거
// 음수의 곱 또는 양수의 곱 중에서 큰 수
function solution(numbers) {
  numbers.sort((a, b) => a-b);
    
    return Math.max((numbers[0]*numbers[1]),(numbers[numbers.length -1]*numbers[numbers.length -2]));
}