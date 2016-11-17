
// ES5
function makeAdder(constant) {
    return function adder(value) {
        return constant + value;
    }
}

// ES6
var makeAdder = a => b => a + b;

var add1 = makeAdder(1);

console.log(add1(1)); // 2
console.log(add1(2)); // 3
console.log(add1(3)); // 4

var add10 = makeAdder(10);

console.log(add10(10)); // 20
console.log(add10(20)); // 30
console.log(add10(30)); // 40


var curry = (func, ...initialArgs) => {
    return arg => {
        const args = initialArgs.concat(arg);

        if (args.length >= func.length) {
            return func(...args);
        } else {
            return curry(func, ...args);
        }
    };
}
