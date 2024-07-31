// 1. 문자열 인수을 배열로 바꾼다.
// 2. 배열을 반복하여 모음과 비교한다.
// 3-1. 모음과 일치하는 배열 요소는 '*'로 치환한다. (문장 내 띄어쓰기와 구분하기 위함) 
// 3-2. 모음과 일치하는 배열 요소는 ''로 치환한다. (희소 배열?)
// 4-1. 배열에서 '*'을 지운다.
// 4-2. 배열에서 ''을 지운다.
// 5. 배열을 문자열로 변환한다.
function solution(my_string) {
    const my_array = my_string.split('');
    
    for(let i = 0; i < my_array.length; i++) {
        switch (my_array[i]){
            case 'a':
                my_array[i] = '';
                continue;
            case 'e':
                my_array[i] = '';
                continue;
            case 'i':
                my_array[i] = '';
                continue;
            case 'o':
                my_array[i] = '';
                continue;
            case 'u':
                my_array[i] = '';
                continue;
            default:
                continue;
        }
    }
    
    let new_array = my_array.filter((word) => word !== '');
    return new_array.join('');
    
}