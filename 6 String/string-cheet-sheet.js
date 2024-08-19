let firstName = "Angelina";

console.log(firstName.length);

console.log(firstName.charAt(0));
console.log(firstName[1]);
console.log(firstName.charCodeAt(1));   // ascii value


console.log(firstName.includes("a"));
console.log(firstName.indexOf("a"));
console.log(firstName.lastIndexOf("l"));


let anotherName = "Ragul";
console.log(firstName.localeCompare(anotherName));  // equal = 0,  notEqual = -1


const str = "Hello World ! Hello World";
console.log(str.replace("World", "WORLD"));
console.log(str.replaceAll("World", "WORLD"));


console.log(str.substring(2, 8));
console.log(str.slice(2, 8));
// return reverse 
// last 5  -  remove 3
console.log(str.slice(-5, -3));

console.log(str.search("!"));

console.log(str.split("!"));
console.log(str.split(" "));
console.log(str.split(""));

const subString = str.split(" ");
console.log(subString.join(" "));


console.log(str.startsWith("H"));
console.log(str.endsWith("d"));

console.log(str.trim());



console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());


const num = 123;
console.log(num, num.toString());

const obj = { name: "ragul", language: "javascript" }
console.log(obj, JSON.stringify(obj));

const st = JSON.stringify(obj);
console.log(st);
console.log(JSON.parse(st));


var fn = "abc"
var ln = " xy"
console.log(fn.concat(ln, " z", " ijk"));


