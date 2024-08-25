
//-------------------
// call stack                memory

// person  - variable          {}       point same object  (shallow copy)
// person2 - variable


// person  - variable          {}       seperate object  (Deep copy)
// person3 - variable          {}


//-----------------------


const person = {
    name: "Ragul",
    "last name": "P",
    age: 24,
}



// Shallow and Deep Copy
// This assign method also create shallow copy of nested objects : lodash method

// 1. Shallow Copy  -> only referance of person
const person2 = person;
delete person2.name;

console.log(person);
console.log(person2);



// 2. Deep Copy
const person3 = Object.assign({}, person);
delete person.name;

console.log(person);
console.log(person3);



