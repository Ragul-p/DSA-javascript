const arr = [1, 2, 3, 4, 5];

// 1. for
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// 2. forEach   x-data  i-index
arr.forEach((x, i) => {
    console.log(i + " - " + x);
});


// 3. 
for (let x of arr) {
    console.log(x);
}

