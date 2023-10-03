// AND, OR operator
let truthy1 = 'string';
let truthy2 = [];
let falsy1 = 0;
let falsy2 = null;
console.log(truthy1||truthy2);  // truthy1  string
console.log(truthy1||falsy1);   // truthy1  string
console.log(falsy1||truthy1);   // truthy1  string
console.log(falsy1||falsy2);    // falsy2   null

console.log(truthy1&&truthy2);  // truthy2  []
console.log(truthy1&&falsy1);   // falsy1   0
console.log(falsy1&&truthy1);   // falsy1   0  
console.log(falsy1&&falsy2);    // falsy1   0