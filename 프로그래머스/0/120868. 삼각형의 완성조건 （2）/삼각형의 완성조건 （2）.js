/**
sides = [max, min]
sides에 가장 긴 변 있는 경우 max < min + x, min <= x <= max
sides에 가장 긴 변이 없는 경우 x < min + max, x > min, x > max
*/

function solution(sides) {
    const sidesMax = Math.max(...sides);
    const sidesMin = Math.min(...sides);
    let count = 0;
    
    // sides에 가장 긴 변이 있는 경우
    for (let x = sidesMax - sidesMin + 1; x <= sidesMax; x++) {
        count++;
    }
    
    // sides에 가장 긴 변이 없는 경우
    for (let x = sidesMax + 1; x < sidesMax + sidesMin; x++) {
        count++;
    }
    
    return count;
}
