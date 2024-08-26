
/*
Time Compleity
O(N2)


Best Case => O(N)



*/

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let last = arr[i];
        let firstIndex = i - 1;

        while (firstIndex >= 0 && arr[firstIndex] > last) {
            arr[firstIndex + 1] = arr[firstIndex];
            firstIndex--;
        }
        arr[firstIndex + 1] = last;

    }

    return arr;
}


console.log(insertionSort([5, 2, 1, 3, 4]));

