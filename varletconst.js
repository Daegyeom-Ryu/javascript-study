// var는 함수, 글로벌 스코프
// 같은 이름의 변수가 선언되었을 때는 가장 가까운 변수부터 취급 
var user = 'user1';
function userIs() {
    var user = 'user2';
    console.log(user);
}
userIs();
console.log(user);

// let, const는 블록 스코프 -> 조건문,반복문,함수 등 중괄호(블록)를 갖는 것
// 같은 이름의 변수가 선언되었을 때는 가장 가까운 변수부터 취급 
let userAge = 30; 
if(user === 'user1') {
    let userAge = 20;
    const userName = 'userA';
    console.log(`userAge: ${userAge}, userName: ${userName}`);
}
function userInfo() {
    let userAge = 25;
    const userName = 'userB';
    console.log(`userAge: ${userAge}, userName: ${userName}`);
}
userInfo(); 
const userName = 'userC';
console.log(`userAge: ${userAge}, userName: ${userName}`);



function redefinition() {
    // var는 재선언이 가능하다
    var myName = 'Max';
    var myName = 'Daegyeom';
    console.log(myName);
}
redefinition();

// 변수 호이스팅 var, let, const 모두 hoising 되지만, 
// var는 undefined로 초기화됨, let, const는 초기화되지않음
console.log(varVariable);   // undefined
console.log(letVariable);   // Cannot access 'letVariable' before initialization
console.log(constant);      // Cannot access 'letVariable' before initialization
var varVariable = 'varVariable';
let letVariable = 'letVariable';
const constant = 'constant';

