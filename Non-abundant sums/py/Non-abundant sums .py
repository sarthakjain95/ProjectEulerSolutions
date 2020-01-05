
# https://github.com/sarthakjain95/ProjectEulerSolutions
# Problem 23
# Non-abundant sums

# Please try attempting the problem yourself before
# looking at the solution.
# ...

import time

def isAbundantNumber(n):
	divs= []
	s= 0
	for i in range( 1, int(n/2) + 1 ):
		if n%i == 0:
			divs.append(i)
			s+=i
	return s > n


if __name__ == "__main__":

	start= time.time()

	nums= []
	for i in range(2, 28124):
		if isAbundantNumber(i):
			nums.append(i)

	print("Total Abundant Numbers (below 28124):",len(nums))
	
	two_sums= [False] * 28124
	for x in nums:
		for y in nums[ nums.index(x): ]:
			if (x+y)<28124:
				two_sums[x+y]= True
	
	no_sum= 0
	for n in range(1, 28124):
		if not two_sums[n]:
			no_sum+= n
		
	print("Sum of all Non-Abundant Numbers:", no_sum)
	print("Took:", round( time.time() - start, 2 ), "second(s)" )



# ProjectEulerSolutions
# Sarthak Jain