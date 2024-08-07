function solution(order) {
    let count = 0;
    const nums = order.toString().split('');
    for (let i of nums) {
        switch (i) {
            case '3':
            case '6':
            case '9':
                ++count;
                break;
            default:
                break;
        }
    }
    return count;
}
