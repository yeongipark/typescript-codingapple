class Word {
  num: number[];
  str: string[];
  constructor(...arr: (number | string)[]) {
    this.num = [];
    this.str = [];
    arr.forEach((item) => {
      if (typeof item === "number") {
        this.num.push(item);
      } else {
        this.str.push(item);
      }
    });
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
