package Math

func generateKey(num1 int, num2 int, num3 int) int {
	response := 0

	f := num1 / 1000
	s := num2 / 1000
	th := num3 / 1000

	response += min(f, s, th) * 1000

	f = (num1 % 1000) / 100
	s = (num2 % 1000) / 100
	th = (num3 % 1000) / 100

	response += min(f, s, th) * 100

	f = (num1 % 100) / 10
	s = (num2 % 100) / 10
	th = (num3 % 100) / 10

	response += min(f, s, th) * 10

	f = num1 % 10
	s = num2 % 10
	th = num3 % 10

	response += min(f, s, th)

	return response
}
