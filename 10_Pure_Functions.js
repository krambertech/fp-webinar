/*
    Чистая функция
    * одинаковые аргументы -> одинаковый результат
    * нет побочных эффектов
    * не использует внешнее состояние
*/


// ⬇️ Impure functions ⬇️

var time = () => new Date().toLocaleTimeString();

var getRandomNumber = () => Math.random();

var addToCart = (cart, product) => {
    cart.items.push(product);
    return cart;
};

var auth = (login, password) => {
    if (authService.auth(login, password)) {
        localStorage.setItem('isLoggedIn', 'true');
        return true;
    }

    return false;
};

var name = 'Vasya';
var hello = () => console.log('Hello ' + name + '!');


// ⬇️ Pure functions ⬇️

var double = x => x * 2;

var getOrdersTotalAmount = orders => {
    return orders.reduce((sum, order) => sum + order.amount, 0);
};

var z = 10;
var add = (x, y) =>  x + y;

var hello = name => console.log('Hello ' + name + '!');
