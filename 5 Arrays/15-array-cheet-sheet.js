const arr = [1, 2, 3, 4, 5]
const ar2 = new Array(5).fill(5)
console.log(ar2)
arr.length
arr.push("a")
arr.pop();
arr.unshift("a");
arr.shift();
arr.includes(3)
arr.indexOf(3)
arr.splice(1, 3)
arr.splice(1, 2, "A", "B", "C")
arr.slice(1, 3)
arr.concat(arr2)
arr.every((d, i) => arr[i] == arr2[i]);
arr.sort((a, b) => a - b);
arr.sort((a, b) => b - a);
arr.reverse();
arr.map()
arr.filter()
arr.reduce()
arr.flat()
arr.find()




