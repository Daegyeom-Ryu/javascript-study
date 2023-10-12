const data = 'newYork;10.99;2000';
// ------------ split 사용해서 문자열 -> 배열 변환 ------------
const stringToArrayData = data.split(';');
stringToArrayData[1] = +stringToArrayData[1];
// console.log(stringToArrayData); // [ 'newYork', 10.99, '2000' ]

// ------------ join 사용해서 배열 -> 문자열 변환 ------------
const arrayToStringData = stringToArrayData.join(' ');
console.log(arrayToStringData); // 'newYork 10.99 2000'
