/*
set contain unique
find size of object
*/


const set = new Set([1, 2, 3, 1, 2, 3]);
// console.log(set);

// set.add(5);
// set.delete(1);
// console.log(set.has(2));
// set.clear()
// console.log(set);



for (let value of set) {
    console.log(value);
}

for (let [x, y] of set.entries()) {
    console.log(x, y);
}

console.log(set.size);