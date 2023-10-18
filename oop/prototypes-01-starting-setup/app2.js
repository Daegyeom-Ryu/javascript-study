// constructor 함수로 만들지 않을 객체(이미 생성했거나, 새로 생성하는 경우)의 prototype 변경,설정 방법
// Object.setPrototypeOf();
const course = {
  title: 'JavaScript - Complete Course',
  rating: 5,
};
// console.log(course.__proto__ === Object.prototype); // course.__proto__ = Object.prototype
console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  //   ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
course.printRating();
console.log(Object.getPrototypeOf(course));

const student = Object.create(
  {
    // [[prototype]]
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    // property 설정
    name: {
      enumerable: true,
      configurable: true,
      value: 'Max',
      writable: false,
    },
  }
); // {}안에는 prototype이 들어감

student.age = 30;
Object.defineProperty(student, 'progress', {
  enumerable: true,
  configurable: true,
  value: 0.8,
  writable: false,
});

console.log(student);
