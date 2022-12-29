const fibonacci = function(nth) {
    let num = parseInt(nth);
    if (num <= 0){
        return "OOPS";
    };
    let fib = [1, 1];
    for (let i = 2; i < num; i++){
        let fibNext = fib[i-1] + fib[i-2];
        fib.push(fibNext);
    };
    return answer = fib[nth - 1];
};

// Do not edit below this line
module.exports = fibonacci;
