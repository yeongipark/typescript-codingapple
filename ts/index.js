// 3번
function 함수() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    console.log(rest);
}
함수("fff", true, 343, 43243, 4324324, "fadsfasd");
// 4번
function 함수2() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var num = [];
    var str = [];
    rest.forEach(function (item) {
        if (typeof item === "string") {
            str.push(item);
        }
        else {
            num.push(item);
        }
    });
    return [str, num];
}
console.log(함수2("b", 5, 6, 8, "a"));
