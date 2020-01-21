
# https://github.com/sarthakjain95/ProjectEulerSolutions
# Problem 25
# 1000-digit Fibonacci number

# Please try attempting the problem yourself before
# looking at the solution.
# ...

if __name__ == "__main__":

	fibbo= [1,1]
	num= fibbo[-1]

	while len(str(num)) != 1000:
		fibbo.append( fibbo[-1] + fibbo[-2] )
		num= fibbo[-1]

	print(num)
	print("Found at {} position".format(len(fibbo)))

# ProjectEulerSolutions
# Sarthak Jain