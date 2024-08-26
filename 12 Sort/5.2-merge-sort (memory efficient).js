
const mergeSort = (arr, low, high) => {

    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        mergeSort(arr, low, mid);
        mergeSort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }

}

const merge = (arr, low, mid, high) => {
    const result = []
    let leftIndex = low, rightIndex = mid + 1;
    while (leftIndex <= mid && rightIndex <= high) {
        if (arr[leftIndex] < arr[rightIndex]) {
            result.push(arr[leftIndex])
            leftIndex++;
        }
        else {
            result.push(arr[rightIndex])
            rightIndex++;
        }
    }

    while (leftIndex <= mid) {
        result.push(arr[leftIndex])
        leftIndex++;
    }

    while (rightIndex <= high) {
        result.push(arr[rightIndex])
        rightIndex++;
    }


    for (let i = low; i <= high; i++) {
        arr[i] = result[i - low]
    }

}

const arr1 = [29, 10, 8, 16, 37, 14, 4, 45]
console.log(mergeSort(arr1, 0, arr1.length - 1))
console.log(arr1);