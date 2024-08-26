

/*
sort() => default take as string  ["-2","-7","1000","5"]
                                   "aaaaa"  "z"
     >0   [b,a]
     <0   [a,b]
   ===0   a and b

sort only work an array
*/


// 1. sort a array

const arr = [-2, -7, 1000, 5];
console.log(arr.sort());

// ascending order
console.log(arr.sort((a, b) => a - b));

// descending order
console.log(arr.sort((a, b) => b - a));


const strArr = ["mango", "apple", "banana"];
console.log(strArr.sort());


// 2. Sort a string

// Ascii Value Capital Value first come
const str = "Ragul";
console.log(str.split("").sort().join(""));

const str2 = "ragul";
console.log(str2.split("").sort().join(""));
