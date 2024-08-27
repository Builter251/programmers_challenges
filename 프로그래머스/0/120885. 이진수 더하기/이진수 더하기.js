function solution(bin1, bin2) {
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);

    // 정수로 덧셈 수행
    const sum = num1 + num2;

    // 결과를 이진수 문자열로 변환
    return sum.toString(2);
}