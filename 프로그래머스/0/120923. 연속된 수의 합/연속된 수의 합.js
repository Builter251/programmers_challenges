function solution(num, total) {
    let first = (total/num)-((num-1)/2);
    const result = [];
    
    for (let i = 0; i < num; i++) {
        result.push(first+i);
    }
    
    return result;
}