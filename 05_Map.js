var users = [
    { type: 'admin',     name: 'Ivan Ivanov' },
    { type: 'admin',     name: 'Irina Sokolova' },
    { type: 'user',      name: 'Tatiana Petrenko' },
    { type: 'moderator', name: 'Vasyl Vasylenko' },
    { type: 'user',      name: 'Petya Pirofov' },
    { type: 'user',      name: 'Boris Ignatiev' },
];

var userNames = [];

for (var i = 0; i < users.length; i++) {
    userNames.push(users[i].name);
}

var getProp = prop => object => object[prop];
var isAdmin = user => user.type === 'admin';
var getUserName = getProp('name');

var userNames = users.map(getUserName);

var adminNames = users
    .filter(isAdmin)
    .map(getUserName);
