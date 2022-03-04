// never를 자즈 사용하는 3가지 경우

// 항상 오유 발생
function error(message: string): never {  // never은 어떠한 형태도 (아무것도) 빈환하지 않는다. 
  throw new Error(message);
}

// never 타입을 결과 추론
function fail() {
  return error("failed");
}

// 무한 루프 
function infiniteLoop(): never {
  while (true) {}
}

function returnVoid(message: string): void {
  console.log(message);

  return ; // or return undefined; //할당이 가능한 값은 undefined만 가능, any는 안됨.
}
returnVoid('리턴이 없다'); 
