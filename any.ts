function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나"); // type = undefined

console.log(typeof(any1))