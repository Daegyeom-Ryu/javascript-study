// AND, OR operator
let truthy1 = 'string';
let truthy2 = [];
let falsy1 = 0;
let falsy2 = null;
console.log(truthy1 || truthy2); // truthy1  string
console.log(truthy1 || falsy1); // truthy1  string
console.log(falsy1 || truthy1); // truthy1  string
console.log(falsy1 || falsy2); // falsy2   null

console.log(truthy1 && truthy2); // truthy2  []
console.log(truthy1 && falsy1); // falsy1   0
console.log(falsy1 && truthy1); // falsy1   0
console.log(falsy1 && falsy2); // falsy1   0

// spread operator
const array = [1, 2, 'hello', { name: 'ydg', age: 30 }];
const deepCopiedArray = [...array];
deepCopiedArray[0] = 0; // 복사된 값(primitive type)은 대체 가능하다.
deepCopiedArray[3].age = 40; // 복사된 요소(주소값)는 기존 array 요소(주소값)와 동일하다. (주의할 것)
console.log(array, deepCopiedArray);

// 배열 요소 중 객체를 deepCopy하고 싶을 때
const persons = [
  { name: 'max', age: 30 },
  { name: 'manuel', age: 34 },
];
const deepCopyPersons = persons.map((person) => ({ ...person }));
deepCopyPersons[0].age = 33;
console.log(persons);
console.log(deepCopyPersons);

const nums = [1, -1, 2, 10, -5];
console.log(Math.min(...nums)); // spread 연산자를 써서 인자로 넣을 수도 있다.

// rest operator -> spread랑 다르게 남은 녀석들을 모아서 배열(객체)로 만든다.
const personInfo = ['Ryu', 'DaeGyeom', 'Mr', 30];
// 배열 분할하기
const [firstName, lastName, ...restInfo] = personInfo;
console.log(firstName, lastName, restInfo);

// 객체 분할하기
// const personInfoKeyValue = {
//   first: 'Ryu',
//   last: 'Daegyeom',
//   sex: 'Mr',
//   age: 30,
// };
// const { first, last, ...rest } = personInfoKeyValue;
// console.log(first, last, rest);
