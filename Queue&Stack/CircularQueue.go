package main

import "fmt"

func main() {
	queue := Constructor(5)
	fmt.Printf("Is empty? %v\n", queue.IsEmpty())
	fmt.Printf("Is full? %v\n", queue.IsFull())
	fmt.Printf("Dequeue: %v\n", queue.DeQueue())
	fmt.Printf("Enqueue: %v\n", queue.EnQueue(1))
	fmt.Printf("Enqueue: %v\n", queue.EnQueue(2))
	fmt.Printf("Enqueue: %v\n", queue.EnQueue(3))
	fmt.Printf("Enqueue: %v\n", queue.EnQueue(4))
	fmt.Printf("Enqueue: %v\n", queue.EnQueue(5))
	fmt.Printf("Enqueue: %v\n", queue.EnQueue(6))
	fmt.Printf("Is empty? %v\n", queue.IsEmpty())
	fmt.Printf("Is full? %v\n", queue.IsFull())
	fmt.Printf("Dequeue: %v\n", queue.DeQueue())
	fmt.Printf("Enqueue: %v\n", queue.EnQueue(6))
	fmt.Printf("Dequeue: %v\n", queue.DeQueue())
	fmt.Printf("Dequeue: %v\n", queue.DeQueue())
	fmt.Printf("Dequeue: %v\n", queue.DeQueue())
	fmt.Printf("Dequeue: %v\n", queue.DeQueue())
	fmt.Printf("Dequeue: %v\n", queue.DeQueue())
	fmt.Printf("Dequeue: %v\n", queue.DeQueue())
	fmt.Printf("Is empty? %v\n", queue.IsEmpty())
	fmt.Printf("Is full? %v\n", queue.IsFull())
	fmt.Printf("Enqueue: %v\n", queue.EnQueue(1))
	fmt.Printf("Is empty? %v\n", queue.IsEmpty())
	fmt.Printf("Is full? %v\n", queue.IsFull())
}

type MyCircularQueue struct {
	head, tail, size int
	arr              []int
}

func Constructor(k int) MyCircularQueue {
	return MyCircularQueue{
		head: -1,
		tail: -1,
		size: 0,
		arr:  make([]int, k),
	}
}

func (this *MyCircularQueue) EnQueue(value int) bool {
	if this.IsFull() {
		return false
	}

	this.tail = (this.tail + 1) % cap(this.arr)
	this.arr[this.tail] = value

	if this.size == 0 {
		this.head++
	}

	this.size++

	return true
}

func (this *MyCircularQueue) DeQueue() bool {
	if this.IsEmpty() {
		return false
	}

	if this.head == this.tail {
		this.head = -1
		this.tail = -1
		this.size = 0
		return true
	}

	this.size--
	this.head = (this.head + 1) % cap(this.arr)

	return true
}

func (this *MyCircularQueue) Front() int {
	if this.IsEmpty() {
		return -1
	}
	return this.arr[this.head]
}

func (this *MyCircularQueue) Rear() int {
	if this.IsEmpty() {
		return -1
	}
	return this.arr[this.tail]
}

func (this *MyCircularQueue) IsEmpty() bool {
	if this.size == 0 {
		return true
	}
	return false
}

func (this *MyCircularQueue) IsFull() bool {
	if this.size == cap(this.arr) {
		return true
	}
	return false
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * obj := Constructor(k);
 * param_1 := obj.EnQueue(value);
 * param_2 := obj.DeQueue();
 * param_3 := obj.Front();
 * param_4 := obj.Rear();
 * param_5 := obj.IsEmpty();
 * param_6 := obj.IsFull();
 */
