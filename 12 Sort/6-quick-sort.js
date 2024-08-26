/*

*/

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let pivotIndex = Math.floor(Math.random() * arr.length);
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex)
            continue;

        if (arr[i] < arr[pivotIndex]) {
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), arr[pivotIndex], ...quickSort(right)]
}

let arr1 = [5, 2, 4, 1, 3];
console.log(quickSort(arr1))
