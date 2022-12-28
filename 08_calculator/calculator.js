const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(userArr) {
  let solution = 0;
  for (num of userArr){
    solution += num;
  };
  return solution;
};

const multiply = function(userArr) {
  let solution = 1;
  for (num of userArr){
    solution *= num;
  };
  return solution;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
  if (a === 0){
    return 1;
  }
  let answer = 1;
	for (let i = 1; i <= a; i++){
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
