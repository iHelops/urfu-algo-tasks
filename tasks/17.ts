// https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
    const str = x.toString();

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
    }

    return true;
}
