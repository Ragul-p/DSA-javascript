const arr = [1, 2, 3, 4, 5];
console.log(arr);

// o(1)
const removeLast = arr.pop();
console.log(arr);

const insertLast = arr.push(6);
console.log(arr);


//o(n)
const removeFirst = arr.shift();
console.log(arr);

const insertFirst = arr.unshift("a");
console.log(arr);

