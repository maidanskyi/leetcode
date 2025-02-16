package main

import "fmt"

func main() {
	fmt.Printf("0 == %d\n", countStudents([]int{1, 1, 0, 0}, []int{0, 1, 0, 1}))
	fmt.Printf("3 == %d\n", countStudents([]int{1, 1, 1, 0, 0, 1}, []int{1, 0, 0, 0, 1, 1}))
}

func countStudents(students []int, sandwiches []int) int {
	count := 0

	for len(students) > 0 && count < len(students) {
		if students[0] == sandwiches[0] {
			students = students[1:]
			sandwiches = sandwiches[1:]
			count = 0
			continue
		}

		tmp := students[0]
		students = students[1:]
		students = append(students, tmp)
		count++
	}

	return len(students)
}
