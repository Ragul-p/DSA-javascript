/*

            [29,10,16,8,37,14,4,45]
        [29,10,16,8]         [37,14,4,45]
     [29,10]  [16,8]        [37,14]  [4,45]
   [29] [10]  [16] [8]     [37] [14] [4] [45]

           left                  right
            x                      y

     [10,29]  [8,16]        [14,37]  [4,45]
        [8,10,16,29]         [4,14,37,45]
            [4,8,10,14,16,29,37,45]

            
x+y=N
Time Comlexity O(N)

*/






const mergeSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

const merge = (left, right) => {
    const result = []
    let leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        }
        else {
            result.push(right[rightIndex])
            rightIndex++;
        }
    }

    while (leftIndex < left.length) {
        result.push(left[leftIndex])
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex])
        rightIndex++;
    }

    return result;
}

const arr1 = [29, 10, 8, 16, 37, 14, 4, 45]
console.log(mergeSort(arr1))