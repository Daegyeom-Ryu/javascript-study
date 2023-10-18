// class Person {
//   name = 'Max';
//   constructor() {
//     this.name = 'Daegyeom';
//     this.age = 30;
//   }
//   greet() {
//     console.log(
//       'Hi my name is ' + this.name + ' and I am ' + this.age + ' years old'
//     );
//   }
// }

// 클래스의 이면
function Person() {
  // 생성자 함수
  //   this = {}; 1. new keyword가 하는 일
  this.age = 30;
  this.name = 'Daegyeom';
  this.greet = function () {
    console.log(
      'Hi my name is ' + this.name + ' and I am ' + this.age + ' years old'
    );
  };
  //   return this; 2. new keyword가 하는 일 (this라는 객체를 만들어서, 프로퍼티 및 메서드를 담아서 반환)
}
Person.prototype = {
  age: 40,
  printAge() {
    console.log(this.age);
  },
};

// 함수(함수도 객체)는 prototype이라는 특수한 property를 갖는다.
// 생성자 함수로 인스턴스화한 객체는 [[prototype]] 객체를 갖는다(fallback 객체). 접근 방법은 __proto__ property
// 인스턴스화된 객체의 속성이나, 메서드가 없다면 Object.prototype까지 [[prototype]] (fallback 객체)을 거슬러 올라가면서 찾는다.
// 속성이 없다면 undefined, 메서드가 없다면 error를 반환한다.
// 생성자 함수의 prototype property를 설정하여, 인스턴스화된 객체의 __proto__ property로 설정할 수 있다.
// 이것은 prototype을 이용한 상속 개념이다. (class의 extends와 같다.)

const person = new Person();
console.dir(Person);
console.dir(person);
person.printAge(); // fallback
console.log(person.__proto__ === Person.prototype); // true
