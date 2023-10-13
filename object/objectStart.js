const userChosenKeyName = 'level';
const userChosenValue = 3;
const person = {
  'freekey (convert-to-String)':
    'Actually, key of object is converted to string automatically',
  name: 'Max',
  0: 'number can be a key',
  1.5: 'number can be a key',
  age: 30,
  // 동적으로 객체에 key가 추가될 경우(ex: 사용자 입력)
  //   [userChosenKeyName]: userChosenValue,
  [userChosenKeyName]: userChosenValue,
  hobbies: ['Coding', 'Soccer'],
  greet: () => {
    console.log('hi there');
  },
};
// console.log(person[userChosenKeyName]);
console.log(person);
// console.log(person.)
// 객체의 키는 자동으로 문자열로 변환되지만, 띄어쓰기나 하이푼 등 자유도 높이고 싶을 때 ''써서 수동으로 바꿔준다.
// 숫자나 자유도를 높인 키는 .notation으로 접근할 수 없다.
console.log(person['freekey (convert-to-String)']);
console.log(person[0]);
console.log(person['0']);
console.log(person[1.5]);
console.log(person['1.5']);
person.greet();
// 객체에 대해 정의되지 않은 프로퍼티에 접근 시도시 오류 대신 undefined
// console.log(person.isAdmin); //undefined

// property update, insert
person.age = 31;
person['age'] = 31;
person.isAdmin = true;

// property delete
delete person.age;

const numbers = {
  number: 3,
  5: 'hi',
  3: 'hello',
};

console.log(numbers); // 객체를 출력할 땐 정렬된 순서로 나온다.
