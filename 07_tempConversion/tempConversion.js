const convertToCelsius = function(temp) {
  let cel = ((temp - 32) * (5/9));
  let answer = Math.round(cel * 10) / 10;
  return answer;
};

const convertToFahrenheit = function(temp) {
  let answer = Math.round(((temp * (9/5)) + 32) * 10) / 10;
  return answer;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
