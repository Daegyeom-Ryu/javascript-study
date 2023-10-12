const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// ---------------------- 일반적인 for... of... 반복 ----------------------
// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }
// console.log(taxAdjustedPrices);

// ----------------------forEach를 사용한 반복 ----------------------
// (요소, 인덱스, 전체 배열을 콜백의 parameter로 사용 가능)
// prices.forEach((price, idx, prices) => {
//   priceObj = { idx: idx, price: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices);

// ----------------------map 사용 ----------------------
// forEach와 달리 mapping된 새로운 배열을 return한다.
// 새로운 배열을 반환하기 위해 콜백함수 실행될 때마다 변환된 요소를 return 해야 한다.
// const taxAddedPrices = prices.map((price, idx, prices) => {
//   priceObj = { idx: idx, price: price * (1 + tax) };
//   return priceObj;
// });
// console.log(prices, taxAddedPrices);

// ---------------------- sort 내장함수의 사용 ----------------------
// 배열의 각 요소는 문자열로 바뀌어, 첫 글자(유니 코드 기준)만으로 요소쌍끼리 대소비교 후 오름차순 정렬한다.
// const sortedPrices = prices.sort(); // [ 10.99, 3.99, 5.99, 6.59 ];

// 콜백함수를 사용해서 조정할 수 있다.
// return 값이 0보다 크면, a는 b보다 나중
// return 값이 0이라면, a와 b는 서로 정렬의 대상이 아님, 다른 모든 요소들과 정렬
// return 값이 0보다 작으면 a는 b보다 이전

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) return 1;
//   else if (a === b) return 0;
//   else return -1;
// });
// console.log(sortedPrices); // [ 3.99, 5.99, 6.59, 10.99 ];
// ---------------------- reverse() 사용 ----------------------
// console.log(sortedPrices.reverse()); // [ 10.99, 6.59, 5.99, 3.99 ]

// ---------------------- filter의 사용 ----------------------
// 반환값이 true인 요소만 새로운 배열의 요소가 된다.
// const filteredPrices = prices.filter((price, idx, prices) => {
//   return price > 6;
// });
// console.log(filteredPrices); // [ 10.99, 6.59 ]

// ---------------------- reduce의 사용 ----------------------
// reduce는 callback 함수와 초기값(선택)을 인수로 받는다.
// 초기값을 설정하면 처음 prevValue는 초기값이 된다.
// 초기값을 설정하지 않으면 인덱스 1부터 시작하여, prevValue는 인덱스 0 의 값이 된다.
// 매 요소마다 수행된 callback 함수의 return 값은 prevValue가 된다.
// 모든 배열 요소에 대해 수행하고 나서, 콜백이 반환하는 최종 값이 반환된다.
// const initialValue = () => 0;
// const initialValue = 0;
// const sum = prices.reduce(
//   (prevValue, currValue, currIdx, prices) => prevValue + currValue,
//   initialValue
// );

// console.log(sum); // 27.56
