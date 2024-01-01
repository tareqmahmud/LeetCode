/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(var i = 0, j = numbers.length - 1; i < j;) {
        const numSum = numbers[i] + numbers[j];
        if (numSum === target) {
            return [i + 1, j + 1];
        }else if (numSum > target) {
            j--;
        }else {
            i++;
        }
    }
};
// @lc code=end

