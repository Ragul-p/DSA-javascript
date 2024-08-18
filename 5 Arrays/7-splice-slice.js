// 1. splice  --> chane the original array

const arr = [1, 2, 3, 4, 5, 6]
// argument-> 1  index
// argument-> 2  how many elements to remove

console.log(arr);
arr.splice(2, 1);
console.log(arr);

console.log(arr);
arr.splice(1, 3, "a", "b", "c");
console.log(arr);





// 2. slice  --> don't change the original array
//           --> return array start-index & before end-index

const arr2 = [10, 9, 8, 7, 6, 5]

console.log(arr2);
console.log(arr2.slice(1, 3));
console.log(arr2);
