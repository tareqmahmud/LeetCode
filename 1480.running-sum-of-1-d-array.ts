/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
    const result: number[] = [];
    let lastResult = 0;
    nums.forEach((num) => {
        lastResult += num;
        result.push(lastResult);
    });

    return result;
};
// @lc code=end

