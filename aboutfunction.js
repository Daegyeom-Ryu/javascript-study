const person = {
  name: 'Max',
  greet: function () {
    // 객체에 연결된 함수: method라 부름
    console.log('Hi There');
  },
};
console.log(person.name);
console.log(person.greet());

// const startGameBtn = document.getElementById('start-game-btn');

// 일반적인 함수 선언
function startGame() {
  console.log('Game is Starting...');
}
startGame(); // direct execution
// startGameBtn.addEventListener('click', startGame); // indirect execution

console.log(typeof startGame); // function
console.log(startGame); // startGame의 내용
console.dir(startGame); // key:value로 구성되어 있음 -> 함수도 객체다

// 변수에 함수를 저장할 수도 있다. -> hoisting과 관련해서 동작방법이 다르다
// 함수 표현식이라 한다, 익명함수여도 상관없다.
const end = function endGame() {
  console.log('Game is the end...');
};
end();
const endGame = function () {
  console.log('Game is the end...');
};
endGame();

// 화살표 함수의 장점: 표현식이 한 줄일 때 중괄호와 return 생략하고 바로 반환 가능
const add = (a, b) => a + b;
console.log(add(1, 2));

// 화살표 함수에서 표현식이 한 줄일 때 객체를 반환하고 싶을 때는, 소괄호로 묶는다.
const loadPerson = () => ({ name: 'Daegyeom' });
console.log(loadPerson());

// 인자(argument)의 값이 설정되지 않거나 ==  undefined값이 들어가면, default value가 사용된다.
const subtract = (a = 3, b = 3) => a - b;
console.log(subtract()); // 0
console.log(subtract(5)); // 2
console.log(subtract(undefined, 3)); // -3
console.log(subtract('', null)); // 0

// ...spread와 ...rest의 차이 -> spread는 깊은 복사에 사용, ...rest는 매개변수에 사용
// ...rest 연산자 사용, 원하는 만큼 인자들을 받아 합쳐서 numbers 배열에 집어넣는다.
// ...rest 연산자는 맨 뒤에만 올 수 있고, 하나만 사용될 수 있다.
const sumUp = (a, b, ...numbers) => {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
};
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
// function 키워드로 만든 함수에서는 ...rest 연산자도 사용되지만, ES6 이전에는 arguments라는 것을 사용했다.
const subtractUp = function () {
  let sum = 0;
  for (const num of arguments) {
    // arguments는 사용하지 말 것
    sum -= num;
  }
  return sum;
};
console.log(subtractUp(1, 5, 10, -3, 6, 10, 25, 88));
