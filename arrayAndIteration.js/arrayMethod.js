const array = [1, 2, 3, 4, 5];
// includes : 해당 값 가지고 있는지 확인, 있으면 true 없으면 false 반환
array.includes(2);
const array1 = [...array];
const array2 = [...array];

// splice : 업데이트, 삽입, 삭제에 사용, 삭제된 요소들의 배열 반환
const newArray = array.splice(0); // 0번 인덱스부터 끝까지 삭제 후, 반환
const newArray2 = array1.splice(1, 1, 'hi', 'hello'); // 1번 인덱스부터 1개 삭제 후, 1번 인덱스 앞에 'hi','hello' 삽입
const newArray3 = array2.splice(-1, 1); // 마지막 인덱스는 -1로 접근가능하다.

// slice : 배열의 일부를 잘라 새로 배열로 만듬
const arr = [1, 2, 3, 4, 5];
const slicedArr1 = arr.slice(2, 4);
slicedArr1.push('hello'); // [3, 4, 'hello']
const slicedArr2 = arr.slice(-3, -1); // 항상 왼쪽 인덱스부터 start
slicedArr2.push('hi'); // [3,4, 'hi'];

// indexOf, lastIndexOf -> primative value에 대해서만 수행, 못찾으면 -1 반환
const complexArr = [1, 10, null, 'hello', '5', 'hello', 6, undefined, 8];
const indexOfFirsthello = complexArr.indexOf('hello', 1); // 3
const indexOfSecondhello = complexArr.lastIndexOf('hello', -1); // 5
const indexOfNull = complexArr.indexOf(null); // 2

// find 메소드는 primitive 외에 reference value도 존재하는지 확인 가능하다
// 찾으면 해당 요소 반환, 못찾으면 undefined 반환
const personData = [
  null,
  'hello',
  undefined,
  [1, 2, 3],
  { name: 'Max' },
  3,
  { name: 'Manuel' },
];
const manuel = personData.find((elemOfArr, idx, fullArr) => {
  if (
    elemOfArr === null ||
    elemOfArr === undefined ||
    typeof elemOfArr === 'number' ||
    typeof elemOfArr === 'string' ||
    Array.isArray(elemOfArr)
  ) {
    return false;
  } else if (elemOfArr instanceof Object) return elemOfArr.name === 'maa';
});
manuel.age = 30;
console.log(personData); // manuel age 반영

// findIndex는 해당 요소의 인덱스를 반환, 콜백 로직은 find와 동일
// 찾으면 index 반환, 못찾으면 -1 반환
const maxIndex = personData.findIndex((elemOfArr, idx, fullArr) => {
  if (
    elemOfArr === null ||
    elemOfArr === undefined ||
    typeof elemOfArr === 'number' ||
    typeof elemOfArr === 'string' ||
    Array.isArray(elemOfArr)
  ) {
    return false;
  } else if (elemOfArr instanceof Object) return elemOfArr.name === 'Max';
});
console.log(maxIndex); // 4
