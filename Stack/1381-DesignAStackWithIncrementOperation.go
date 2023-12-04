package main

type CustomStack struct {
	stack []int
}

func Constructor(maxSize int) CustomStack {
	s := make([]int, 0, maxSize)

	return CustomStack{stack: s}
}

func (this *CustomStack) Push(x int) {
	if len(this.stack) < cap(this.stack) {
		this.stack = append(this.stack, x)
	}
}

func (this *CustomStack) Pop() int {
	res := -1

	if len(this.stack) != 0 {
		res = this.stack[len(this.stack)-1]
		this.stack = this.stack[:len(this.stack)-1]
	}

	return res
}

func (this *CustomStack) Increment(k int, val int) {
	for i := 0; i < k && i < len(this.stack); i++ {
		this.stack[i] += val
	}
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * obj := Constructor(maxSize);
 * obj.Push(x);
 * param_2 := obj.Pop();
 * obj.Increment(k,val);
 */
func main() {
	stk := Constructor(3)
	stk.Push(1)           // stack becomes [1]
	stk.Push(2)           // stack becomes [1, 2]
	stk.Pop()             // return 2 --> Return top of the stack 2, stack becomes [1]
	stk.Push(2)           // stack becomes [1, 2]
	stk.Push(3)           // stack becomes [1, 2, 3]
	stk.Push(4)           // stack still [1, 2, 3], Do not add another elements as size is 4
	stk.Increment(5, 100) // stack becomes [101, 102, 103]
	stk.Increment(2, 100) // stack becomes [201, 202, 103]
	stk.Pop()             // return 103 --> Return top of the stack 103, stack becomes [201, 202]
	stk.Pop()             // return 202 --> Return top of the stack 202, stack becomes [201]
	stk.Pop()             // return 201 --> Return top of the stack 201, stack becomes []
	stk.Pop()             // return -1 --> Stack is empty return -1.

}
