/*
    Функции высшего порядка
    * принимают функцию как аргумент
    * возвращают функцию
    * и то, и другое
*/

$('#btn').click(function() {
    alert('Hey! You clicked button!');
});


function validate(isValid, type, value) {
    if (isValid(value)) {
        console.log('✅ ' + value + ' is valid ' + type);
    } else {
        console.log('⛔️ ' + value + ' is not valid ' + type);
    }
}

function isInteger(value) {
    return Number.isInteger(value);
}

validate(isInteger, 'integer', 45);
validate(isInteger, 'integer', 'foo');
validate(isInteger, 'integer', 23.1);

function isBoolean(value) {
    return typeof value === 'boolean';
}

validate(isBoolean, 'boolean', 21);
validate(isBoolean, 'boolean', 'true');
validate(isBoolean, 'boolean', true);

// Validator HOF

function createValidator(isValid, type, value) {
    return function validate(value) {
        if (isValid(value)) {
            console.log('✅ ' + value + ' is valid ' + type);
        } else {
            console.log('⛔️ ' + value + ' is not valid ' + type);
        }
    }
}

function isInteger(value) {
    return Number.isInteger(value);
}

var validateInteger = createValidator(isInteger, 'integer');

validateInteger(45);
validateInteger('foo');
validateInteger(23.1);

function isBoolean(value) {
    return typeof value === 'boolean';
}

var validateBoolean = createValidator(isBoolean, 'boolean');

validateBoolean(21);
validateBoolean('true');
validateBoolean(true);
