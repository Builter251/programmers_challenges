// string -> set -> string
function solution(my_string) {
    // 문자열을 Set으로 변환
    let stringSet = new Set(my_string);

    // Set을 다시 문자열로 변환
    let newString = Array.from(stringSet).join('');
    
    return newString;
}