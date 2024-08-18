// 1. filter --> return all value

const arr = [1, 2, 3, -1, -2, -3]
console.log(arr);

const filterArray = arr.filter((data, index) => {
    return data > 0
});
console.log(filterArray);


// 2. reduce --> return first value

const findArray = arr.find((data) => {
    return data < 0
});
console.log(findArray);