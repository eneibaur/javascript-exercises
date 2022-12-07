const removeFromArray = function(array, ...args) {
    let filter = [...args];
    let answer = array;
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < filter.length; j++){
            if (answer[i] === filter[j]){
                answer.splice(i, 1);
                i--;
            }
        }
    }
    return answer;
};

// look at each item in the array
// compare it to each item in the arguments array
// if it does match, remove the value from answer.

// Do not edit below this line
module.exports = removeFromArray;
