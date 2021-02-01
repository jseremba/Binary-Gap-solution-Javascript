// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var maxGap = 0;
    var curMaxGap = 0;
    var binStr = N.toString(2);
    var startIndexFromEnd = binStr.length-1;
    var countStart = 0;
    for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
        if (binStr.charAt(startIndexFromEnd) != '0') {
            countStart = i;
            break;
        }
    }
    for (var i = countStart; i >= 0; i--) {
        if (binStr.charAt(i) == '0') {
            curMaxGap = curMaxGap+1;
        } else {
            if (curMaxGap > maxGap) {
                maxGap = curMaxGap;
            }
            curMaxGap = 0;
        }
    }
    return maxGap;
}
