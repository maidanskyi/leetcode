package main

import "fmt"

func main() {
	obj := Constructor()
	obj.Add(3)
	obj.Add(0)
	obj.Add(2)
	obj.Add(5)
	obj.Add(4)
	fmt.Printf("k = 2, product = %d, should be = 20\n", obj.GetProduct(2))
	fmt.Printf("k = 3, product = %d, should be = 40\n", obj.GetProduct(3))
	fmt.Printf("k = 4, product = %d, should be = 0\n", obj.GetProduct(4))
	obj.Add(8)
	fmt.Printf("k = 2, product = %d, should be = 32\n", obj.GetProduct(2))
}

type ProductOfNumbers struct {
	prefixProduct []int
}

func Constructor() ProductOfNumbers {
	return ProductOfNumbers{
		prefixProduct: []int{1},
	}
}

func (this *ProductOfNumbers) Add(num int) {
	if num == 0 {
		this.prefixProduct = []int{1}
	} else {
		this.prefixProduct = append(this.prefixProduct, num*this.prefixProduct[len(this.prefixProduct)-1])
	}
}

func (this *ProductOfNumbers) GetProduct(k int) int {
	if k >= len(this.prefixProduct) {
		return 0
	}

	return this.prefixProduct[len(this.prefixProduct)-1] / this.prefixProduct[len(this.prefixProduct)-1-k]
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Add(num);
 * param_2 := obj.GetProduct(k);
 */
