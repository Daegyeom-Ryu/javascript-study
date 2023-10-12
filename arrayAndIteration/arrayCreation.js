// iterable: for ... of... 사용 가능한 객체(=== Symbol.iterator) (array, nodeList, string, Maps, Sets)
// array-like: 길이를 갖고, 인덱스로 접근 가능 (nodeList, HTMLCollection, string ...)

const array = [1, 2, 3]; // [1, 2, 3]
const array1 = new Array(1, 2, 3); // [1, 2, 3]
const array2 = new Array(5); // [empty * 5]
// Array.from은 iterable OR array-like 객체 인자로 받아서 배열로 만들어줌
const array3 = Array.from('Hello'); // ['H','e','l','l','o']

const listItems = document.querySelectorAll('li');
const arrayListItems = Array.from(listItems); // 배열로 변환
