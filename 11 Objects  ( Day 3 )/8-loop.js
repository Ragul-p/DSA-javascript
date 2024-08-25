
const person = {
    name: "Ragul",
    "last name": "P",
    age: 24,
    isEducator: true,
    skills: ["Java", "JavaScript", "NodeJS"]
}




// Loop Through an object

for (const key in person) {
    console.log(key + " : " + person[key]);
}


Object.keys(person).forEach((data) => {
    console.log(data);
})

