
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

console.log(person);




const person2 = new Object({ name: "ragul" });
console.log(person2);

