const findElement = (arr, target) => {
    for (let x of arr) {
        if (x == target) {
            return true;
        }
    }

    return false;
}

console.log(findElement([1, 2, "a", "b", "*"], "*"));


const arr = [1, 2, "a", "b", "*"];
console.log(arr.includes("*"));