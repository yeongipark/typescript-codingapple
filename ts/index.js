// 1 번
function max() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return rest.reduce(function (acc, cur) {
        if (acc < cur) {
            return (acc = cur);
        }
        else {
            return acc;
        }
    }, -100000);
}
console.log(max(1, 2, 3, 4, 5, 5, 6, 77, 6, 7, 8, 7, 6));
function 함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
함수({ user: "kim", comment: [3, 5, 4], admin: false });
function 함수1(_a) {
    var num = _a[0], string = _a[1], boolean = _a[2];
    console.log(num, string, boolean);
}
함수1([40, "wine", false]);
