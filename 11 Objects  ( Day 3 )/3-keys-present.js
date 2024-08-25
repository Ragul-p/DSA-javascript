
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


// 3.How To Find Key In The Object
console.log(person.hasOwnProperty("name"));
