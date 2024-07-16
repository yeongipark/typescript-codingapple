var User = /** @class */ (function () {
    function User() {
    }
    User.x = 10;
    User.y = 20;
    User.addOne = function (num) {
        User.x += num;
    };
    User.printX = function () {
        console.log(User.x);
    };
    return User;
}());
User.addOne(3); //이렇게 하면 x가 3 더해져야함
User.addOne(4); //이렇게 하면 x가 4 더해져야함
User.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
console.log(User.y);
