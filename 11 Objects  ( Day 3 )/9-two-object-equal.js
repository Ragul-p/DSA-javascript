
const person = {
    name: "Ragul",
    "last name": "P",
    age: 24,
}



const person2 = {
    name: "Ragul",
    "last name": "P",
    aget: 24,
}



// check two object are equal or not
console.log(Object.is(person, person2));


let isFlag = true;
for (let key in person) {
    if (person[key] !== person2[key]) {
        isFlag = false;
    }
}

if (isFlag == true) {
    console.log("They are same");
} else {
    console.log("They are not same");
}
