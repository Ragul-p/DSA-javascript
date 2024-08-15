/*

Question 3: count the number of digits of a number

34252 : 5

34252
3425
342
34
3

*/

function countDigits(num) {

    num = Math.abs(num);
    var count = 0;

    do {
        num = Math.floor(num / 10);
        count = count + 1;
    } while (num > 0)

    return count;
}

console.log(countDigits(12980987));
console.log(countDigits(-128));


