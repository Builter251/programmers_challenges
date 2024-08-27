function solution(before, after) {
    const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]); 
    const sortedB = [...before].sort();
    const sortedA = [...after].sort()
    return equals(sortedB, sortedA) ? 1 : 0;
}