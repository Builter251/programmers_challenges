// 1. 문자열을 배열로 만든다. = split(' ')
// 2. "Z"와 "Z"앞의 요소를 없앤다.
// 2-1. "Z"의 인덱스 값을 모두 찾는다.
// 2-2. "Z"가 없으면 3단계로 넘어간다.
// 2-3. "Z" 인덱스 -1 요소를 없다.
// 2-4. "Z" 요소를 없앤다.
// 3. 남은 요소를 숫자로 변환하여 모두 합한다. => reduce
// 4. 합한 값을 반환한다.
function solution(s) {
    const arr = s.split(' ');
    const arrFt = arr.filter((el, i, ar) => !(el === "Z" || (i < ar.length - 1 && ar[i+1] === "Z")));
    return arrFt.reduce((a,c) => a + Number(c), 0);
}