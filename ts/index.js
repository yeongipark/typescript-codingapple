function 함수(x) {
    console.log(x.length);
    return;
}
함수("hello");
함수(["kim", "park"]);
function parse(x) {
    return JSON.parse(x);
}
var data = '{"name" : "dog", "age" : 1 }';
console.log(parse(data));
// 3번
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var a = new Person("어쩌구");
a.name;
