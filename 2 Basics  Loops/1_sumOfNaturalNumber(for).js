/*
Question 1 : sum of all natural numbers from 1 to n
sum of 1 to 5: 15
1+2+3+4+5=14
*/

// 1
function sumOfNaturalNuber(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum
}
console.log(sumOfNaturalNuber(5));


// 2
function sumOfNaturalNuber2(num) {
    return num * (num + 1) / 2
}
console.log(sumOfNaturalNuber2(5)); 
