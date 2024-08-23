function solution(lines) {
    // 선분의 범위를 나타낼 배열 생성 (200칸, -100부터 100까지 커버)
    let arr = new Array(201).fill(0);

    // 선분의 시작점과 끝점에 해당하는 배열 범위를 1씩 증가
    lines.forEach(line => {
        let [start, end] = line;
        for (let i = start; i < end; i++) {
            arr[i + 100]++; // 음수 좌표를 배열의 양수 인덱스로 변환
        }
    });

    // 두 개 이상의 선분이 겹치는 구간의 길이를 계산
    let overlapLength = 0;
    arr.forEach(value => {
        if (value > 1) overlapLength++;
    });

    return overlapLength;
}
