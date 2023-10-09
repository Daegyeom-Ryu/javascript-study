// HTML을 삽입하는 방법과 객체를 생성 후 삽입하는 방법

// ---------------------------------------------------------------------------------
// HTML 삽입하는 방법 -> innerHTML, insertAdjacentHTML

// innerHTML
// 문제점 1: 요소 전체가 다시 파싱되고 렌더링된다 -> 성능 저하
// 문제점 2: 요소의 child인 input value 바뀌었을 때, innerHTML 사용시 input value가 초기화 된다.
const listForInsert = document.querySelector('ul');
listForInsert.innerHTML = listForInsert.innerHTML + '<li>item4</li>';

// insertAdjacentHTML
// 요소 전체가 렌더링되지 않으므로, input value가 초기화되지 않는다.
// 문제점: 새로 만들어진 태그를 다시 식별해야하는데, HTML 구조가 복잡할수록 어려워진다.
const divForInsert = document.querySelector('div'); // div는 input 태그를 포함하고 있음
divForInsert.insertAdjacentHTML('beforeend', '<p>something went wrong!</p>');

// ---------------------------------------------------------------------------------
// 객체 생성 후 삽입하는 방법 -> createElement
const newLi = document.createElement('li');
newLi.textContent = 'item5';
const newLi2 = document.createElement('li');
newLi2.textContent = 'item0';
// appendChild(), append(), prepend()
// append(), prepend() 사용시 텍스트 노드, 요소 노드 둘 다 가능 & 복수의 요소 노드 삽입 가능
listForInsert.appendChild(newLi);

// prepend(), before(), after()
listForInsert.prepend(newLi2);

// replaceWith()
