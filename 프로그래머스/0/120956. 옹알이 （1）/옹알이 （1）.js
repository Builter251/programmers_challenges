function solution(babbling) {
    const regex = /^(aya|ye|woo|ma)+$/;
    const result = babbling.filter(word => regex.test(word));
    return result.length;
}