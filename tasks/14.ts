// https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';

    let common = strs[0];

    for (let i = 0; i < strs.length; i++) {
        while (!strs[i].startsWith(common)) {
            common = common.substring(0, common.length - 1);
        }
    }

    return common;
}
