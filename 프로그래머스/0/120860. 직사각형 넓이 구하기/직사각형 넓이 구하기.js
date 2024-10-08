function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    const line1 = Math.max(x1, x2, x3, x4) - Math.min (x1, x2, x3, x4);
    const line2 = Math.max(y1, y2, y3, y4) - Math.min (y1, y2, y3, y4);
    return line1 * line2;
}