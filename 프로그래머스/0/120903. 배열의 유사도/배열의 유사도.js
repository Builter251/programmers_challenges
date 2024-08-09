function solution(s1, s2) {
    // const set1 = new Set(s1);
    // const set2 = new Set(s2);
    // return set1.intersection(set2).size;
    
    const intersection = s1.filter(item => s2.includes(item));
    return intersection.length;
    
}