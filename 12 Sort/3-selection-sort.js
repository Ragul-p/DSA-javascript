/*

Time Compleity:-
O(N2)

Maximum No Of Swapping :-
   N-1

*/



function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let mid = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[mid]) {
                mid = j;
            }
        }

        if (mid !== i) {
            [arr[i], arr[mid]] = [arr[mid], arr[i]]
        }
    }

    return arr;

}


console.log(selectionSort([10, -7, -2, 5, 1, -1]));
console.log(selectionSort([15, 2, 13, 1, 0]));
