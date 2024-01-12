// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = function(s: string): boolean {
    const original = formatString(s);
    const reversed = original.split('').reverse().join('');
    return original === reversed;
};

const formatString = (s: string) => {
    return (
        s
            .toLowerCase()
            .replaceAll(' ', '')
            .replaceAll(/[^a-z0-9]/gi, '')
    );
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
