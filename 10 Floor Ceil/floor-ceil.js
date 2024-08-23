/*

Given an array : [1,5,8,10,12]

floor & ceil value of 9;

floor value of 9 will be 8;
ceil  value of 9 will be 10;

*/





function floorCeil(arr, target) {

    let start = 0, end = arr.length;
    let floor = -1, ceil = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] == target) {
            floor = mid;
            ceil = mid;
            return [ceil, floor];
        }
        else if (arr[mid] > target) {
            ceil = mid;
            end = mid - 1;
        }
        else {
            floor = mid;
            start = mid + 1
        }

    }

    return [ceil, floor]
}


console.log(floorCeil([1, 5, 8, 10, 12], 9));

