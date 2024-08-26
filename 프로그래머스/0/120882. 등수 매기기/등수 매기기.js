// 등수 1에서 더하거나, 등수 꼴등에서 빼거나?
function solution(score) {
    const avg = score.map((el, idx) => (el[0]+el[1])/2);
    const rank = Array.from({ length: avg.length }, () => 1);
    
    for (let i = 0; i < avg.length; i++) {
        for (let j = 0; j < avg.length; j++) {
            if (avg[j] > avg[i]) {
                rank[i]++;
            }
        }
    }
    
    return rank;

}