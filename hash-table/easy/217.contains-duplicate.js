/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const hashTable = {};

    for (var i = 0; i < nums.length; i++) {
        if (hashTable[nums[i]] !== undefined) {
            return true;
        } else {
            hashTable[nums[i]] = true;
        }
    }

    return false;
};
// @lc code=end
