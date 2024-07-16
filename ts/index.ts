class User {
  private static x = 10;
  public static y = 20;

  static addOne: (num: number) => void = function (num) {
    User.x += num;
  };

  static printX: () => void = function () {
    console.log(User.x);
  };
}

User.addOne(3); //이렇게 하면 x가 3 더해져야함
User.addOne(4); //이렇게 하면 x가 4 더해져야함
User.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

console.log(User.y);
