// let myName: number = undefined // 에러
// let u: undefined = null; // 에러

let v: void = undefined;  //가능

let union: string | null = null; // union=합집합, 가능
console.log(union);

union = "Mark";
console.log(union);
