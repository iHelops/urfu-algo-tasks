// https://leetcode.com/problems/length-of-last-word/description/

function lengthOfLastWord(s: string): number {
    const splited = s.trim().split(' ');
    return splited[splited.length - 1].length;
}
