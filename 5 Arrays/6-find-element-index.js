const findElement = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }

    return -1;
}

console.log(findElement([1, 2, "a", "b", "*"], "*"));
console.log(findElement([1, 2, "a", "b", "*"], 0));



const arr = [1, 2, "a", "b", "*"];
console.log(arr.indexOf("*"));
console.log(arr.indexOf("k"));
console.log(arr.indexOf("b"));

