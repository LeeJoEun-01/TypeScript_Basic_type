let list: number[] = [1, 2, 3];

// let list2: number[] = [1, '2', 3]; // 에러, 배열 안에 들어가 있는 데이터들의 자료형이 다 같지 않다.

// let list3: string[] = [1, 2, 3]; // 에러, string 배열을 선언했지만 배열에 들어간 자료형이 number임으로 데이터 type이 일치하지 않음 

let list2: ( number | string )[] = [1, 2, 3, '4'];

console.log(typeof(list))