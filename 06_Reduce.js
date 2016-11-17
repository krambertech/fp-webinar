/*
    reduce
    Метод reduce() применяет функцию к аккумулятору и
    каждому значению массива (слева-направо),
    сводя его к одному значению
*/

var orders = [
    { id: 1, amount: 200 },
    { id: 2, amount: 100 },
    { id: 3, amount: 250 },
    { id: 4, amount: 90 },
];

var totalAmount = 0;

for (var i = 0; i < orders.length; i++) {
    totalAmount = totalAmount + orders[i].amount;
}

var totalAmount = orders.reduce((prev, curr) => prev + curr, 0);

/*
     Можно reduce'ить в совершенно любой тип
*/

var arrayOfArrays = [[0, 1], [1, 3], [4, 0]];

var resultArray = arrayOfArrays.reduce((result, array) => result.concat(array), []);

/*
    Даже объект
*/

var userTypeCounts = users.reduce((counts, user) => {
    counts[user.type] = (counts[user.type] || 0) + 1;
    return counts;
}, {});
