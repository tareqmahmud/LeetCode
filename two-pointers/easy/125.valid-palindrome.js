/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var charArr = s.toLowerCase().trim().split("");

    if (charArr.length <= 1) {
        return true;
    }

    var isPalindromeStr = true;

    for (let i = 0, j = charArr.length - 1; i < j; ) {
        if (isNumaric(charArr[i]) && isNumaric(charArr[j])) {
            if (charArr[i] === charArr[j]) {
                isPalindromeStr = true;
                i++;
                j--;
                continue;
            } else {
                isPalindromeStr = false;
                break;
            }
        }

        if (!isNumaric(charArr[i])) {
            i++;
        }

        if (!isNumaric(charArr[j])) {
            j--;
        }
    }

    return isPalindromeStr;
};

function isNumaric(char) {
    return (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9")
    );
}
// @lc code=end

