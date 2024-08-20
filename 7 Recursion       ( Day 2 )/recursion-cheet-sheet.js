

function fun(n) {
    if (n == 0) {
        return;
    }
    console.log("fun", n);
    fun(n - 1)
}

fun(10)  // infinite time runs




// call stack memory (full)    |    console.log()
//                             |
//  | fun() |                  |     fun
//  | fun() |                  |     fun
//  | fun() |                  |     fun


// 1 stack - memory
// 2 heep  - memory




// Maximum Call Stack -> N
// Memory Taken By The Function

// Time Complexity
// T(n-k)+k
