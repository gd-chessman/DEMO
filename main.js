let result = [];
let nums = [1,1,2];

var findDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == nums[i]) {
                result.push(nums[j]);
            }
        }
    }
    return result;
};

let duplicates = findDuplicates(nums);
console.log(duplicates);