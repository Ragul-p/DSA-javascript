/*
Question 2 : Sum Of digits of a number

1287 : 1+2+8+7 = 18

1287%10  =  remainder=7 , quotient=128
128%10   =  remainder=8 , quotient=12
12       =  remainder=2 , quotient=1
1        =  remainder=1 , quotient=0
              
                     =18

*/


function sumOfDigits(num) {

    let sum = 0;
    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10);
    }

    return sum;
}


console.log(sumOfDigits(1287));

