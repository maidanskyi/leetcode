package main

import (
	"fmt"
	"sync"
)

var counter uint8

func main() {
	fmt.Printf("maximum is: %v\n", maximumWealth([][]int{{1, 2, 3}, {3, 2, 1}}))
	fmt.Printf("maximum is: %v\n", maximumWealth([][]int{{1, 5}, {7, 3}, {3, 5}}))
	fmt.Printf("maximum is: %v\n", maximumWealth([][]int{{2, 8, 7}, {7, 1, 3}, {1, 9, 5}}))
}

func maximumWealth(accounts [][]int) int {
	counter = uint8(len(accounts))
	var (
		response int
		m        sync.Mutex
	)
	ch := make(chan int)

	for _, sl := range accounts {
		go sum(sl, ch, &m) // &wg
	}

	for s := range ch {
		if s > response {
			response = s
		}
	}

	return response
}

func sum(s []int, ch chan int, m *sync.Mutex) {
	var sum int

	for _, val := range s {
		sum += val
	}

	ch <- sum

	m.Lock()
	if counter == 1 {
		close(ch)
	} else {
		counter -= 1
	}
	m.Unlock()

}
