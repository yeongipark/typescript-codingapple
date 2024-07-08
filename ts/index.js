var Word = /** @class */ (function () {
    function Word() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        arr.forEach(function (item) {
            if (typeof item === "number") {
                _this.num.push(item);
            }
            else {
                _this.str.push(item);
            }
        });
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
