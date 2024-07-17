// 1번 해결
type Length = {
  length: number;
};

function 함수<T extends string | string[]>(x: T) {
  console.log(x.length);
  return;
}

함수<string>("hello");
함수<string[]>(["kim", "park"]);

// 2 번
interface Animal {
  name: string;
  age: number;
}

function parse<T>(x: string): T {
  return JSON.parse(x);
}

let data = '{"name" : "dog", "age" : 1 }';
console.log(parse<Animal>(data));

// 3번
class Person<T> {
  name: T;
  constructor(a: T) {
    this.name = a;
  }
}
let a = new Person<string>("어쩌구");
a.name;
