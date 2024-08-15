// 9. Palindrome Number

function isPalindrome(num) {

    var copyNum = num, sum = 0;

    while (num > 0) {
        let rem = num % 10;
        sum = (sum * 10) + rem;
        num = Math.floor(num / 10);
    }

    return sum == copyNum

}


console.log(isPalindrome(121));
console.log(isPalindrome(1551));
