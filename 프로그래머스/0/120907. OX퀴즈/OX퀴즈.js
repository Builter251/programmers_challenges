function solution(quiz) {
    const results = [];
    for (let equation of quiz) {
        const arrEq = equation.split(' ');
        const [n1,op,n2,eq,re] = arrEq;
        switch (op) {
            case '+':
                Number(n1) + Number(n2) === Number(re) ? results.push("O") : results.push("X");
                break;
            case '-':
                Number(n1) - Number(n2) === Number(re) ? results.push("O") : results.push("X");
                break;
        }
    }
    
    return results;
}