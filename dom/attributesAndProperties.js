// attributes는 html 태그 내에 있는 속성을 말함
// property는 객체의 속성을 말함

// attribute와 property는 하나를 변경시 나머지가 즉각 변경되기도 하고,
// 전혀 다르게 동작하는 경우도 존재함

// id의 경우에 attribute <-> property가 실시간 반영
const h1Object = document.getElementById('main-title');
h1Object.id = 'new-title';
h1Object.setAttribute('id', 'main-title');
// class의 경우에 attribute <-> property가 실시간 반영
// attribute와 property의 이름이 같진 않다.
h1Object.className = 'new-class';
h1Object.setAttribute('class', '');

const inputObject = document.querySelector('input');
inputObject.value = 'update value'; // 사용자 입력값 <-> property가 실시간 반영
inputObject.value = inputObject.getAttribute('value'); // attribute -> property로 반영 가능, 사용자 입력에도 반영
