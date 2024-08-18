
// shallow copy of array  -> Refer Same Memory
const a = [1, 2, 3];
const b = a;
a.splice(0, 1)
console.log(a);
console.log(b);

// 1. copy single array

const arr = [1, 2, 3, 4, 5];
console.log(arr);

const arr2 = arr;
console.log(arr2);

const arr3 = Array.from(arr);
console.log(arr2);

const arr4 = arr.concat();
console.log(arr4);


// 2. copy 2 more array

const x = [1, 2, 3], y = [7, 8, 9]

const arrCopy1 = [...x, ...y];
console.log(arrCopy1);


const arrCopy2 = x.concat(y);
console.log(arrCopy2);



