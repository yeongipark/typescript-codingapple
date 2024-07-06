type Member = {
  name: string;
  plusOne: (x: number) => number;
  changeName: () => {};
};

let 회원정보 = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};

회원정보.changeName();
