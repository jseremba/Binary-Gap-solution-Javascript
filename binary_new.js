function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxGap = 0;
    const gaps = N.toString(2).split(1).filter(el => {
        return el != null && el != '';
    });
    if (gaps.length > 1) {
        for (const element of gaps) {
            if (element.length > maxGap) {
                maxGap = element.length;
            }
        }
    } else {
      maxGap = 0;
    }
    return maxGap;
}
