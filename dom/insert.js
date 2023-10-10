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
newLi.textContent = 'item6';
const newLi2 = document.createElement('li');
newLi2.textContent = 'item0';
// appendChild(), append(), prepend()
// append(), prepend() 사용시 텍스트 노드, 요소 노드 둘 다 가능 & 복수의 요소 노드 삽입 가능
listForInsert.appendChild(newLi);
listForInsert.prepend(newLi2);

// replaceWith() // 교환이 아닌 교체를 의미
const newLi3 = document.createElement('li');
newLi3.textContent = 'new-item0';
listForInsert.firstElementChild.replaceWith(newLi3);

// before(), after()
// 선택된 요소의 앞,뒤에 삽입하는데 삽입할 요소가 이미 dom에 포함되어 있으면 위치만 이동하게 된다.
const newLi4 = document.createElement('li');
newLi4.textContent = 'item5';
listForInsert.lastElementChild.after(newLi4);
listForInsert.lastElementChild.after(newLi);

// insertAdjacentElement 사용
const thirdLi = listForInsert.children[3];
const newLi5 = document.createElement('li');
newLi5.textContent = 'item3-1';
thirdLi.insertAdjacentElement('afterend', newLi5);

// 복사해서 삽입하기
const newLi6 = newLi.cloneNode(true); // default:false(깊은복사->후손포함X), true(얉은복사->후손까지)
listForInsert.append(newLi6);

// 바로 삭제하기
newLi5.remove();
// 부모로 가서 삭제하기
newLi6.parentElement.removeChild(newLi6);
