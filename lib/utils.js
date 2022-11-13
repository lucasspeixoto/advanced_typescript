"use strict";
/**
 * @return true if the input string is a palindrome
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = void 0;
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
exports.isPalindrome = isPalindrome;
