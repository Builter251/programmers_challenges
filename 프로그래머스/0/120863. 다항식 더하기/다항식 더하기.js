function solution(polynomial) {
    const terms = polynomial.split(" + ");
    let x = 0;
    let constant = 0;

    for (let term of terms) {
        if (term.includes('x')) {
            x += term === 'x' ? 1 : parseInt(term);
        } else {
            constant += parseInt(term);
        }
    }

    let result = [];
    if (x !== 0) {
        result.push(x === 1 ? 'x' : `${x}x`);
    }
    if (constant !== 0) {
        result.push(constant.toString());
    }

    return result.join(' + ');
}