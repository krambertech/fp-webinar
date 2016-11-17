var users = [
    { type: 'admin',     name: 'Ivan Ivanov' },
    { type: 'admin',     name: 'Irina Sokolova' },
    { type: 'user',      name: 'Tatiana Petrenko' },
    { type: 'moderator', name: 'Vasyl Vasylenko' },
    { type: 'user',      name: 'Petya Pirofov' },
    { type: 'user',      name: 'Boris Ignatiev' },
];


var admins = [];

for (var i = 0; i < users.length; i++) {
    if (users[i].type === 'admin') {
        admins.push(users[i]);
    }
}


var admins = users.filter(function(user) {
    return user.type === 'admin';
});


var isAdmin = user => user.type === 'admin';

var admins = users.filter(isAdmin);
