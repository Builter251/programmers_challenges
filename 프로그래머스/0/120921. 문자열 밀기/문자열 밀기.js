// shift -> push
// or pop -> unshift
// 배열 순환 이동

// function solution(A, B) {
//     if (A === B) return 0;
    
//     let shiftCount = 0;
//     let arrA = [...A]; 
//     const shifted = [];
    
//     while(shiftCount < B.length) {
//         let last = arrA.pop();
//         arrA.unshift(last);
        
//         shifted.push(arrA.join(''));
//         shiftCount++;
//     }
    
//     if (!shifted.includes(B)) return -1;
    
//     // B가 있는 위치에서 가장 작은 회전 횟수 찾기
//     const fromStart = shifted.indexOf(B) + 1;
//     const fromEnd = shifted.length - shifted.lastIndexOf(B);
    
//     return Math.min(fromStart, fromEnd);
// }
function solution(A, B) {
    if (A === B) return 0;

    let rotatedA = A;
    for (let i = 1; i <= A.length; i++) {
        rotatedA = rotatedA.slice(-1) + rotatedA.slice(0, -1);  // 오른쪽으로 한 칸 밀기
        if (rotatedA === B) {
            return i;
        }
    }

    return -1;
}
