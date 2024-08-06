function solution(strlist) {
    const len = [];
    for(let word of strlist) {
        len.push(word.length);
    }
    return len;
}