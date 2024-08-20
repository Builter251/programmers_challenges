/**
 * 1. 문제 개요:
 *    - 주어진 2차원 배열 `board`에서 지뢰(1)가 없는 안전한 지역(0)의 칸 수를 계산하는 함수.
 *    - 지뢰가 있는 칸과 인접한 칸(상하좌우 및 대각선)은 위험 지역으로 간주한다.
 * 
 * 2. 코드 설명:
 *    - `outside` 배열: 상하좌우 및 대각선을 표현하는 상대적 위치의 배열.
 *    - `safezone`: 안전한 칸의 수를 카운트하는 변수.
 *    - 이중 `forEach` 루프: 모든 칸을 탐색하며, 지뢰와 인접한 칸을 제외한 안전한 칸을 카운트.
 *    - `return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x]) ? false : safezone++;`:
 *        - `outside.some()`: 인접한 칸들 중 하나라도 지뢰가 있으면 `true`를 반환.
 *        - 인접 칸에 지뢰가 없으면 `safezone`을 증가시킨다.
 * 
 * 3. Optional Chaining (`?.`) 설명:
 *    - Optional chaining은 객체나 배열의 중첩된 프로퍼티에 안전하게 접근할 수 있게 해준다.
 *    - 만약 `self[oy + y]`가 `undefined`이면 `[ox + x]` 접근을 시도하지 않고 `undefined`를 반환.
 *    - 이를 통해 코드가 더 안전해지며, 오류를 방지할 수 있다.
 * 
 * 4. `[ox + x]`가 존재하지 않을 경우:
 *    - `self[oy + y]?.[ox + x]`에서 `[ox + x]`가 배열 범위를 벗어나면 `undefined`를 반환한다.
 *    - Optional chaining은 전체 표현식을 안전하게 처리하며, 오류 없이 `undefined`를 반환하도록 한다.
 */

function solution(board) {

    let outside = [[-1, 0], [-1, -1], [-1, 1], [0, -1], [0, 1], [1, 0], [1, -1], [1, 1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((it, x) => {
        if (it === 1) return false;
        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
            ? false : safezone++;
    }));

    return safezone;
}