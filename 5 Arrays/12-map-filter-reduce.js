const arr = [1, 2, 3, 4, 5]


// 1. map
const newArrayMap = arr.map((data, index) => {
    return data * data
});
// console.log(newArrayMap);


// 2. filter
const newFilter = arr.filter((data, index) => {
    return data > 3
});
// console.log(newFilter);



// 3. reduce
const newReduce = arr.reduce((acc, data) => {
    return acc + data
}, 0);
console.log(". ", newReduce);
