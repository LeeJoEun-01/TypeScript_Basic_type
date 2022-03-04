"use strict";
// const aNumber: number = maybe; // 아무 검사도 하지 않고 사용해서 에러 발생
if (maybe === true) { // 비교 검사로 타입 가드를 만들어서 사용해야지 에러가 안난다.
    const aBoolean = maybe;
    // const aString: string = maybe;  // true로 확인했음으로 maybe의 자료형은 boolean인데 string으로 선언하니까 에러 발생!!
}
if (typeof maybe === "string") { // typeof 검사로 타입 가드를 만들어서 사용해야지 에러가 안난다.
    // const aBoolean: boolean = maybe; // maybe의 자료형은 bstring인데 boolean으로 선언하니까 에러 발생!!
    const aString = maybe;
}
