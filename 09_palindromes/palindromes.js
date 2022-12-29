const palindromes = function (words) {
    const arr = Array.from(words).filter(l => l.match(/[a-z]/i))
    let arrCopy = [...arr];
    let reversedArr = arr.reverse();
    arrCopy = arrCopy.join("").toLowerCase();
    reversedArr = reversedArr.join("").toLowerCase();
    return reversedArr == arrCopy ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
