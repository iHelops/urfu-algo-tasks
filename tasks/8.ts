// https://leetcode.com/problems/valid-anagram/description/

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    for (let i = 0; i < t.length; i++) {
        if (!s.includes(t[i])) s = s.replace(t[i], '')
        else return false
    }

    return true
}
