// -------------------------------------- Sets DataStructure --------------------------------------
const ids = new Set([1, 2, 3]);
// console.log(ids[1]); set은 인덱스 기반 접근 X
// set은 중복이 없기 때문에 값은 하나 뿐이다.(get method 없음)
// 고유값을 관리할 때 유리하다.

console.log(ids.has(1)); // true
ids.add(2); // 이미 있음
ids.delete(3);
// entries()는 왜필요할까? 아마 Sets에서 Maps로 변환하기 쉽게 하기 위해인듯
for (const entry of ids.entries()) {
  console.log(entry);
}
for (const value of ids.values()) {
  console.log(value);
}

// -------------------------------------- Maps DataStructure --------------------------------------
// Map은 언제 쓰일까? 추가적인 정보를 추가하고 싶지만, 객체에는 담고 싶지 않을 때
const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };
// Map은 배열 안의 배열로 초기화 할 수 있고, 배열 안의 배열에는 key, value가 들어간다.
// key는 문자열이나 숫자뿐 아니라 다양하게 들어갈 수 있음
// const personData = new Map([['key', 'some value']])
const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
console.log(personData); // Map(1) { { name: 'Max' } => [ { date: 'yesterday', price: 10 } ] }
console.log(personData.get(person1)); // .get(key)로 value 가져올 수 있음[ { date: 'yesterday', price: 10 } ]
// data 추가는 set으로 한다.
personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}
for (const key of personData.keys()) {
  console.log(key);
}
for (const value of personData.values()) {
  console.log(value);
}
// -------------------------------------- WeakSet --------------------------------------
// weakset은 요소로 객체(배열포함)만 가질 수 있다.
let person = { name: 'max' };
// let personAge = [30];
const persons = new WeakSet();
persons.add(person);
// persons.add(personAge);
// person = null;
// person 변수가 더 이상 사용되지 않으면, WeakSet의 객체 또한 삭제된다(가비지 컬렉션)
// Set의 경우에는 계속 객체를 참조하기 때문에 객체는 메모리 상에 낭비된다.(memory leak)
console.log(persons);
// -------------------------------------- WeakMap--------------------------------------
// weakmap은 객체(배열포함)만 키로 가질 수 있다.
// weakset과 마찬가지로, 해당 객체가 더이상 사용되지 않으면 가비지 컬렉션 발생한다.
// Map의 경우는 계속 객체를 참조하기 때문에 객체는 메모리 상에 낭비된다.(memory leak)
const persons2 = new WeakMap();
let personAge = [30];
persons2.set(person, 'extra info~');
persons2.set(personAge, 'you are too old');
console.log(persons2);
