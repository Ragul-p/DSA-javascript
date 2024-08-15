// 509. Fibonacci Number

/*
Fibonacci 
0 1

1  2  3  4  5  6  7  8   9   10
0  1  1  2  3  5  8  13  14  27

*/



function fibonacci(num) {

    if (num < 2) {
        return num;
    }

    var a = 0, b = 1;

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        sum = (a + b);
        a = b;
        b = sum;
    }
    return sum;
}


console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));