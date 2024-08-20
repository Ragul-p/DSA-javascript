/*

Fibonacci : 0 1 1 2 3 5 8 13 21 

F(0)=0 ,  F(1)=1,  F(n)=F(n-1)+F(n-2)
*/

function fibo(n) {
    if (n < 2) {
        return n
    }
    return fibo(n - 1) + fibo(n - 2)
}

console.log(fibo(8));