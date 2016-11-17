/*
    Частичное применение
*/

function sum(..args) {
    return args.reduce((result, item) => result + item, 0);
}

const partialSum = sum.bind(null, 1, 2, 3);

const parial = (func, ...partialArgs) => (...args) => func(...partialArgs.concat(args));

const partialSum = parial(sum, 1, 2, 3);
