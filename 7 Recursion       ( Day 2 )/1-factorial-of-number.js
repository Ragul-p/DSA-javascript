/*
Factorial 

5! = 5*4*3*2*1 = 120
0! = 1

n??
n! = n*(n-1)!

Time   Complexity   O(N)
Space  Complexity   O(N)

*/





function factorial(n) {
    if (n === 0) { return 1 }

    return n * factorial(n - 1)    //factorial(5)  -->  5 * factorial(4) --> 4 * factorial(3) --> 3 * factorial(2) -->  2 * factorial(1)
}

console.log(factorial(5));