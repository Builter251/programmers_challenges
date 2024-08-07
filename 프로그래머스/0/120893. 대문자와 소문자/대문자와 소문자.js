function solution(my_string) {
    const my_array = [...my_string];
    return my_array.map((cur) => cur === cur.toUpperCase() ? cur.toLowerCase() : cur.toUpperCase()).join('');
}