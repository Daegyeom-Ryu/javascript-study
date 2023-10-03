function checkValueFalsy(arr) {
    arr.forEach(value => {
        if(!value)  return;
        console.log(`${value} is truthy`);
    });
}
function checkValueTruthy(arr) {
    arr.forEach(value => {
        if(value)   return;
        console.log(`${value} is falsy`);
    });
}
const falsyValues = [0, "", null, undefined];
const truthyValues = [1,"string",[],{},['a',-1],{key:'value'}];


checkValueFalsy(falsyValues);
checkValueTruthy(truthyValues);