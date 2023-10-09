// ------------------------  1. 선택자로 찾기 ------------------------
// 하나의 dom 객체를 선택하는 방법
const h1BySelector = document.querySelector('h1');
const h1BySelectorId = document.querySelector('#main-title');
const h1ById = document.getElementById('main-title');
// 다수의 dom 객체를 선택하는 방법
// querySelectorAll() returns a non-live NodeList, getXByY return live NodeLists
// 위 문장은 추가나 삭제를 얘기하는 것임
const liBySelector = document.querySelectorAll('li');
const liBySelectorClass = document.querySelectorAll('.list-item');
const liByTagName = document.getElementsByTagName('li');

// ------------------------2. 상대적 관계를 통해 찾기(dom Traversal) ------------------------
// element와 node method의 차이: element는 요소만, node는 요소, 텍스트 전부 가능

// a. 부모, 자식 찾기
const ulBySelector = document.querySelector('ul');
const ulChildExceptTextNodes = ulBySelector.children;
const ulFirstChildExceptTextNodes = ulBySelector.firstElementChild;
const ulChildIncludingTextNodes = ulBySelector.childNodes;
const ulLastChildIncludingTextNodes = ulBySelector.lastChild;

const ulParentElement = ulBySelector.parentElement;
const ulParentNode = ulBySelector.parentNode;
// document.documentElement.parentNode; document
// document.documentElement.parentElement; null

// b. 조상, 후손 찾기
const myBody = ulBySelector.closest('body'); // 조상찾기
const liLast = myBody.querySelector('li:last-of-type');

// c. 형제 찾기
const sectionBySelector = myBody.querySelector('section');
const prevElemIsHeader = sectionBySelector.previousElementSibling;
const prevNodeIsIndentationOfSection = sectionBySelector.previousSibling;
const nextElemIsButton = sectionBySelector.nextElementSibling;
const nextNodeIsIndentationOfButton = sectionBySelector.nextSibling;
