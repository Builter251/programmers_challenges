// cipher[i*code] 단, i*code < cipher.length
function solution(cipher, code) {
    const decipher = [];
    let i = 1;
    while(i*code <= cipher.length) {
        decipher.push(cipher[i*code-1]);
        ++i;
    }
    
    return decipher.join('');
}