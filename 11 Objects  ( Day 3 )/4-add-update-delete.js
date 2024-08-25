
const person = {
    name: "Ragul",
    "last name": "P",
    age: 24,
    isEducator: true,
    skills: ["Java", "JavaScript", "NodeJS"],
    projects: {
        "WYF": "Backend Project",
    },
    code: function () {
        return "start coding";
    },
    walk: () => {
        return "start walking";
    }
}


// How to add, delete and update keys

// 1.add
person.location = "chennai";
console.log(person);

// 2.update
person.location = "banglore"
console.log(person);

// 3.delete
delete person.walk;
console.log(person);


