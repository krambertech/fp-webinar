function sayHello(name) {
    var text = 'Hello ' + name;
    var say = () => console.log(text);
    say();
}

function sayHello2(name) {
    var text = 'Hello ' + name;
    var say = () => console.log(text);
    return say;
}

var say2 = sayHello2('Vasya');

say2();
