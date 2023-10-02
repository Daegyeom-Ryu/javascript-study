function falseFindUsingForLoop(arr) {
    for (let i = 0; i< arr.length; i++) {
        if(arr[i] === false) {
            console.log('forLoop find false!');
            return 'return Value of function'; // 함수 자체를 반환(중단)
        } 
    }
}
// JavaScript의 forEach 메서드는 반환을 사용한 조기 종료 또는 루프 탈출을 지원하지 않는다. 
// forEach 콜백 내에서 반환을 사용하더라도 전체 루프나 둘러싸는 함수
// (이 경우 falseFindUsingForEach)가 아닌 콜백 함수만 종료한다.
function falseFindUsingForEach(arr) {
    arr.forEach(elem => {
        if(elem === false) {
            console.log('forEach find false!');
            return 'no meaning value'; // forEach 문 내에서 콜백 함수 반환, forEach 문은 중단되지 않음 
        }    
    });
}
let arr = [true,false,false,false];
console.log(falseFindUsingForLoop(arr));
console.log(falseFindUsingForEach(arr));