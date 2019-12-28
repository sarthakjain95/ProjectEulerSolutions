
# https://github.com/sarthakjain95/ProjectEulerSolutions
# Problem 20
# Factorial digit sum

# Please try attempting the problem yourself before
# looking at the solution.
# ...


facto= 1
for i in range(1, 101): facto*= i

facto= list( str(facto) )

sum_of_digits= 0
for digit in facto:
	sum_of_digits+= int( digit )

print("Sum of digits in Factorial of 100 is", sum_of_digits)

# ProjectEulerSolutions
# Sarthak Jain