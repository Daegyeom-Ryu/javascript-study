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
