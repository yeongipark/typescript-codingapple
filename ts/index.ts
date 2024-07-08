// 1 번
function max(...rest: number[]): number {
  return rest.reduce((acc, cur) => {
    if (acc < cur) {
      return (acc = cur);
    } else {
      return acc;
    }
  }, -100000);
}

console.log(max(1, 2, 3, 4, 5, 5, 6, 77, 6, 7, 8, 7, 6));

// 2 번

type Func = {
  user: string;
  comment: number[];
  admin: boolean;
};
function 함수({ user, comment, admin }: Func) {
  console.log(user, comment, admin);
}
함수({ user: "kim", comment: [3, 5, 4], admin: false });

// 3 번
type Arr = (number | boolean | string)[];
function 함수1([num, string, boolean]: Arr) {
  console.log(num, string, boolean);
}

함수1([40, "wine", false]);
