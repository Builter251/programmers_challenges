function solution(my_string) {
    return my_string.match(/\d/g).reduce((a,c) => Number(a) + Number(c));
}