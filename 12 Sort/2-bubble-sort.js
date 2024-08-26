/*
Time Complexity
    Best Case  : O(N)
    Worst Case : O(N2)

Space Complexity
Not using extra space
   O(1)

Maximum No Of Swapping :-
   N*(N-1)/2
*/


function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // let temp = arr[i];
                // arr[i] = arr[i + 1];
                // arr[i + 1] = temp
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true;
            }
        }
    } while (swapped)

    return arr;
}

// console.log(bubbleSort([-2, -7, 1000, 5]));
console.log(bubbleSort([9, 4, 6, 1, 3, 5]));
