

function binarySearchRecur(arr, target) {
    return binarySearch(arr, target, 0, arr.length)
}




function binarySearch(arr, target, start, end) {

    if (start > end) {
        return -1
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) {
        return mid;
    }
    else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    }
    else {
        return binarySearch(arr, target, mid + 1, end);
    }

}


console.log(binarySearchRecur([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));