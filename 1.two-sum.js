/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        // Calculate remaining number from target
        const remainingNumber = target - nums[i];

        // Check is remainingNumber available at numsMap as key or not
        if (
            numsMap.get(remainingNumber) !== undefined &&
            numsMap.get(remainingNumber) !== i
        ) {
            return [numsMap.get(remainingNumber), i];
        }

        // add the number to maps
        numsMap.set(nums[i], i);
    }
};
// @lc code=end

