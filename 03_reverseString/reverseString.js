const reverseString = function(word) {
    let string = [...word];
    string = string.reverse();
    let answer = string.join("");
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
