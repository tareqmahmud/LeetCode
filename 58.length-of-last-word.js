/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitWords = s.trim().split(" ");
    const lastWord = splitWords[splitWords.length - 1];
    return lastWord.length;
};
// @lc code=end

