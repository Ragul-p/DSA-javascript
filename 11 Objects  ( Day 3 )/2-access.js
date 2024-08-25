
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


//  How To access object

// 1. Dot Operator
console.log(person.name);


//2. []
console.log(person["code"]());
console.log(person["last name"]);
