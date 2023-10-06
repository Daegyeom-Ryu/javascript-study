// Primitive type : String, Number, Boolean, null, undefined, Symbol
// Reference type : Object

// Primitive type only have deep copy 
let user1 = 'mike';
let user2 = user1;
user1 = 'Tim';
console.log(user1)  // 'Tim'
console.log(user2)  // 'mike'
// Reference type can have two kinds of copy
// Shallow copy (pointer)
let person = {
    name:'john',
    age:30,
}
let anotherPerson = person;
anotherPerson.age = 32;
console.log('shallow copy');
console.log(person);
console.log(anotherPerson);

// Deep copy (value)
let otherPerson = { ...anotherPerson };
otherPerson.age = 34;
console.log('deep copy');
console.log(anotherPerson);
console.log(otherPerson);