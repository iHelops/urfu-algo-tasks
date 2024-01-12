// https://leetcode.com/problems/min-stack/description/

class MinStack {
    stack: any[] = [];

    push(val: number): void {
        this.stack.push(val)
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        return this.stack.length !== 0 ? this.stack[this.stack.length - 1] : null
    }

    getMin(): number {
        let min = this.stack[0]
        for (const value of this.stack) {
            if (typeof value === 'number' && value < min) min = value
        }

        return min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
