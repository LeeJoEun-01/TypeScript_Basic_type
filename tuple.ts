let x: [string, number];

x = ["hello", 39];

// x = [10, "Mark"];  // 에러남, 튜플은 초기에 선언한 데이터의 type과 길이, 위치가 동일해야함

const person: [string, number] = ["Mark", 39];

// const [first, second, third] = person; // first, second, third에 마우스 커서를 가지고가면 자료형이 보인다. 