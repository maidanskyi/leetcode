package main

import "fmt"

func main() {
	fmt.Printf("response: %d\n", maxDifference("aaaaabbc")) // 3
	fmt.Printf("response: %d\n", maxDifference("abcabcab")) // 1
	fmt.Printf("response: %d\n", maxDifference("mmsmsym"))  // -1
}

// maxDifference
// maybe maxHeap and minHeap is a good DS for this task
// Go has no built-in DS like these
func maxDifference(s string) int {
	hash := make(map[int32]int)

	for _, val := range s {
		if _, ok := hash[val]; !ok {
			hash[val] = 0
		}

		hash[val]++
	}

	// find max odd value (1, 3, ...)
	odd := 0
	for _, v := range hash {
		if v%2 == 1 && odd == 0 {
			odd = v
			continue
		}

		if v%2 == 1 && v > odd {
			odd = v
		}
	}

	// find min even value (2, 4, ...)
	even := 0
	for _, v := range hash {
		if v%2 == 0 && even == 0 {
			even = v
			continue
		}

		if v%2 == 0 && v < even {
			even = v
		}
	}

	return odd - even
}
