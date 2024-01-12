// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs: string[]): string[][] => {
    let map = new Map();

    for (const word of strs) {
        const sorted = sortWord(word);
        const values = map.get(sorted) || [];

        values.push(word);
        map.set(sorted, values);
    }

    return [...map.values()];
};

let sortWord = (str: string) => {
    return str.split('').sort().join('');
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
