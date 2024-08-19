function solution(my_string) {
    const numbers = my_string.match(/\d+/g) || [];
    return numbers.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
}