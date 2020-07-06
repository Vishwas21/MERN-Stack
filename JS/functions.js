// var e = 15

// console.log("e =", e)

//Calculator

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calc(a, b, opFn) {
    return opFn(a, b);
}

var result = calc(10, 50, multiply)
console.log(result)