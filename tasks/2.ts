// https://leetcode.com/problems/valid-parentheses/description/

function isValid(s: string, stack: string[] = []): boolean {
    const map: Record<string, string> = {
        '{': '}',
        '[': ']',
        '(': ')',
    } as const;

    for (const char of s.split('')) {
        if (map[char]) {
            stack.push(map[char]);
            continue;
        }

        if (stack.length === 0 || stack.pop() !== char) return false;
    }

    return stack.length === 0;
}

console.log(isValid("()[]{}"));
