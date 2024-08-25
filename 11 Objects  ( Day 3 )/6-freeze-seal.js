
const person = {
    name: "Ragul",
    "last name": "P",
    age: 24
}



// Objects Methods
// different between freeze and seal method of Object

// 1. freeze
// freeze the object do not do anything in object

Object.freeze(person)
console.log(Object.isFrozen(person));

console.log(person);
person.location = "chennai"
console.log(person);


// 2. seal
// only update values
Object.seal(person);
console.log(Object.isSealed(person));
console.log(person);
person.name = "l"
console.log(person);




