

const binarySearch = (arr, target) => {

    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        // console.log(start, mid, end, "  1");
        if (arr[mid] === target) {
            // console.log(arr[mid], target, "  2");
            return mid
        }
        else if (arr[mid] > target) {
            // console.log(arr[mid], target, "  3");
            end = mid - 1;
        } else {
            // console.log("  4");
            start = mid + 1;
        }

    }

    return -1

}

//                        0  1  2  3  4   5
console.log(binarySearch([1, 4, 6, 9, 12, 15], 10));