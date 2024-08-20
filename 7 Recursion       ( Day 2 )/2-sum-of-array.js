/*

[1, 2, 3, 4, 5]   =>   5 + [1, 2, 3, 4]   =>  4 + [1, 2, 3]   =>  3 +  [1, 2]  =>  2 +  [1] 

*/

function sumofArray(arr) {

    if (arr.length === 0) { return 0 }
    return arr[arr.length - 1] + sumofArray(arr.slice(0, arr.length - 1))

}


function sumofArray2(arr) {

    if (arr.length === 0) { return 0 }
    const lastElement = arr.pop();
    return lastElement + sumofArray2(arr)
}



function sumofArray3(arr, n) {
    if (n === 0) { return 0 }
    return arr[n - 1] + sumofArray3(arr, n - 1)
}

console.log(sumofArray3([1, 2, 3, 4, 5], 5));