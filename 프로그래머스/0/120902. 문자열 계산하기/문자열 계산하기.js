function solution(my_string) {
    const tokens = my_string.split(' '); // 공백을 기준으로 문자열을 분리
    let result = parseInt(tokens[0], 10); // 첫 번째 숫자로 초기화

    // tokens 배열의 2번째 요소부터 순차적으로 계산
    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const number = parseInt(tokens[i + 1], 10);

        if (operator === '+') {
            result += number;
        } else if (operator === '-') {
            result -= number;
        }
    }

    return result;
}