// Math.min([...Math.abs(array[i] - n)])인 array[i]
function solution(array, n) {
    array = array.sort((a,b)=> a-b);
    let minus = array.map((cur) => Math.abs(cur-n));
    let min = Math.min(...minus);
    let minIndex = minus.indexOf(min);
    return array[minIndex];
}