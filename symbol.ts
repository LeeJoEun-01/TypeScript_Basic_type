console.log(Symbol("foo") === Symbol("foo"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

obj[sym]

// 함수에 사용할 때는 (대문자)Symbol, 타입으로 사용할 때는 (소문자)symbol 사용