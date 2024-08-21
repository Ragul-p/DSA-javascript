/*

Linear Search 
O(N)

*/

const arr = [1, 2, 3, 4, 5, 6, 9, 1, 8];

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }

    return -1
}


console.log(linearSearch([1, 2, 3, 4, 5, 6, 9, 1, 8], 5));   // o(n)

console.log(arr.includes(5));
console.log(arr.indexOf(5));

console.log(arr.find((num) => num > 5));
console.log(arr.findIndex((num) => num == 5));
