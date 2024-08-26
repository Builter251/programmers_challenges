function solution(id_pw, db) {
    const [id, pw] = id_pw;
    let result = '';

    for (let i = 0; i < db.length; i++) {
        if (id !== db[i][0]) {
            result = 'fail';
            continue;
        } else if (id === db[i][0] && pw !== db[i][1]) {
            result = 'wrong pw';
            break;
        } else if (id === db[i][0] && pw === db[i][1]) {
            result = 'login'
            return result;
        }
    }

    return result;
}