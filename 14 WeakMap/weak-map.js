/*
WeakMap  => Store key only => Object 
*/


// 1. Map

let map = new Map();
let obj1 = { name: "ragul" };

map.set(obj1, "metadata");
console.log(map);

obj1 = null;
console.log(map);


// 2. WeakMap

let weakMap = new WeakMap();
let obj = { name: "ragul" };

weakMap.set(obj, "metadata");
console.log(weakMap);

obj = null;
console.log(weakMap);