function solution(spell, dic) {
    return dic.some(word => 
        spell.every(letter => word.includes(letter))
    ) ? 1 : 2;
}
