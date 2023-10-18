// 클래스의 이면
// 함수(함수도 객체)는 prototype이라는 특수한 property를 갖는다.
// 생성자 함수로 인스턴스화한 객체는 [[prototype]] 객체를 갖는다(fallback 객체). 접근 방법은 __proto__ property
// 인스턴스화된 객체의 속성이나, 메서드가 없다면 Object.prototype까지 [[prototype]] (fallback 객체)을 거슬러 올라가면서 찾는다.
// 속성이 없다면 undefined, 메서드가 없다면 error를 반환한다.
// 생성자 함수의 prototype property를 설정하여, 인스턴스화된 객체의 __proto__ property로 설정할 수 있다.
// 이것은 prototype을 이용한 상속 개념이다. (class의 extends와 같다.)
// function Person() {
//   // 생성자 함수
//   //   this = {}; 1. new keyword가 하는 일
//   this.age = 30;
//   this.name = 'Daegyeom';
//   // this.greet = function () {
//   //   console.log(
//   //     'Hi my name is ' + this.name + ' and I am ' + this.age + ' years old'
//   //   );
//   // };
//   //   return this; 2. new keyword가 하는 일 (this라는 객체를 만들어서, 프로퍼티 및 메서드를 담아서 반환)
// }
// // Person.prototype = {
// //   printAge() {
// //     console.log(this.age);
// //   },
// // };
// // 메서드를 prototype 속성에 두면, 메모리 효율
// Person.prototype.greet = function () {
//   console.log(
//     'Hi my name is ' + this.name + ' and I am ' + this.age + ' years old'
//   );
// };

// // 프로토타입을 덮어쓰지 않고 추가해서 사용, constructor()함수를 유지할 수 있음
// // 기존 프로토타입의 프로토타입 역시 유지 가능
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };
// // Person(함수객체)에 describe 속성이 생김
// // 인스턴스화 된 person 객체에는 생기지 않는다.
// // static property, static methods
// Person.describe = function () {
//   console.log('Creating Person...');
// };
// class AgedPerson {
//   constructor() {
//     this.sex = 'male';
//   }
//   printAge() {
//     console.log(this.age);
//   }
// }

class Person extends AgedPerson {
  name = 'Max';
  constructor() {
    // super의 역할
    // AgedPerson 클래스를 기반으로 하는 객체를 만들고, Person의 prototype property로 설정 (prototype chaining)
    // Person 클래스를 인스턴스화한 객체에 대한 [[prototype]]] 객체로 설정
    super();
    this.age = 30;
    this.greetInConstructor = function () {
      console.log(
        'Hi my name is ' + this.name + ' and I am ' + this.age + ' years old'
      );
    };
  }
  greet() {
    console.log(
      'Hi my name is ' + this.name + ' and I am ' + this.age + ' years old'
    );
  }
  // 다음과 같이 함수 리터럴로 필드 greet에 할당하면, property가 되어버려서 메모리 사용 늘어난다.
  // 사용 지양할 것 (하지만 addEventListener등등, 화살표함수를 사용해서 this를 문맥에 따라 사용하려고 할 때는 유리하다.)
  // greet = function () {
  //   console.log(
  //     'Hi my name is ' + this.name + ' and I am ' + this.age + ' years old'
  //   );
  // }
}

// const person = new Person();
// console.dir(Person);
// console.dir(person);
// person.printAge(); // fallback
// console.log(person.__proto__);
// console.log(person.__proto__ === Person.prototype); // true

// Object는 생성자 함수 이지만 인스턴스화하지 않아도, 속성과 메서드에 직접 접근할 수 있다.
// Object는 객체의 [[prototype]]이 아니다
// Object.prototype이 객체의 [[prototype]]
// static property, static methods
console.dir(Object);
console.dir(Object.prototype); // Object.prototype이 모든 객체의 마지막 [[prototype]]

// 클래스와 생성자 함수의 차이)
// 인스턴스 객체의 constructor()안에서 만든 속성, 메서드 등은 객체에서 바로 접근 가능,
// 인스턴스 객체의 constructor() 밖에서 생성된 메서드는 [[prototype]]에 들어간다.
// 일종의 최적화로, 속성의 경우 인스턴스 객체에 따라 종속적, 메서드는 인스턴스 객체와 독립적이다.
// constructor() 밖의 메서드는 [[prototype]]에 객체에 관계없이 동일한 주소로 저장(메모리 효율)
const p1 = new Person();
const p2 = new Person();
// console.log(p1.greetInConstructor === p2.greetInConstructor);
console.log(p1.__proto__.greet === p2.__proto__.greet);
// console.log(p1.greetInConstructor(), p2.greetInConstructor());
console.log(p1.greet(), p2.greet());
