// const obj = new Object();
// console.log(obj);

/*
  1.object key only => string
  2.object cannot iterate
*/


// map is store key value pair

/*
   1.map key => anything
   2.map are iteratable
*/

const map = new Map([["ok", "kk"], ["kk", "ok"]]);


// 1. add
map.set("name", "ragul");
map.set(21, "age");
map.set(true, "isEducator");

// 2. delete
// map.delete(true);
console.log(map.delete(true));   // return true
console.log(map);

// 3. key is present or not
console.log(map.has("name"));

// 4.update
map.set("name", "RAGUL");
console.log(map);

// 5. Maps are iteratable
map.forEach((values, keys) => {
  console.log(`${keys} : ${values}`);
});

// 6. read
console.log(map.get("name"));

// 7. clear
map.clear()
console.log(map);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());


