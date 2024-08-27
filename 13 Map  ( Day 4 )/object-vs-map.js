/*

objects  has lots of  extra keys


map  has no extra keys

*/

const obj = {};
const arr = [1000000].fill(0).map(() => Math.random() * 1000000);

console.time("obj");
for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i]
}
console.timeEnd("obj");
console.log(obj);



const map = new Map();
const arr2 = [1000000].fill(0).map(() => Math.random() * 1000000);

console.time("map");
for (let i = 0; i < arr2.length; i++) {
    map.set(i, arr2[i]);
}
console.timeEnd("map");
console.log(map);