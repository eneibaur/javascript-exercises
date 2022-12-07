const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" ||
    a < 0 || b < 0)
        return 'ERROR';
    let highNum = b;
    let lowNum = a;
    if (a > b) {
        highNum = a;
        lowNum = b;
    }
    let answer = 0;
    for (let i = lowNum; i <= highNum; i++) {
        answer += i;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
