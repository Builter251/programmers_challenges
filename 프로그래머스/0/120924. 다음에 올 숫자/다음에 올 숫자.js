function solution(common) {
    const [c1, c2, c3] = common;
    
    if (c2-c1 === c3-c2) {
        return common[common.length-1] + (c2-c1);
    } else {
        return common[common.length-1] * (c2/c1);
    }
}