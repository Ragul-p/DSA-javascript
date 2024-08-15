// 268. Missing Number

/*

   nums = [3,0,1]

   1 + 0 + 3     = 4  
   1 + 2 + 3 + 0 = 6

                 = 6 - 4 
                 = 2
*/



function missingNumber(nums) {

    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    return Math.abs(nums.length * (nums.length + 1) / 2 - sum);
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));






