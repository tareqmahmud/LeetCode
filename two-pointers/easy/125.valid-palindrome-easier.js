/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * This abroach is easy but slower then base two pointer solution
 */
var isPalindrome = function (s) {
    // Remove spaces, special characters and make lowercase the string
    const alphaNumString = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    for (let i = 0, j = alphaNumString.length - 1; i < j; i++, j--) {
        if (alphaNumString[i] !== alphaNumString[j]) {
            return false;
        }
    }

    return true;
};
// @lc code=end

