// 3번
function 함수(...rest: [string, boolean, ...(string | number)[]]) {
  console.log(rest);
}

함수("fff", true, 343, 43243, 4324324, "fadsfasd");

// 4번
function 함수2(...rest: (string | number)[]): [string[], number[]] {
  let num: number[] = [];
  let str: string[] = [];

  rest.forEach((item) => {
    if (typeof item === "string") {
      str.push(item);
    } else {
      num.push(item);
    }
  });

  return [str, num];
}

console.log(함수2("b", 5, 6, 8, "a"));
