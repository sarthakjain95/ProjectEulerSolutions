
# https://github.com/sarthakjain95/ProjectEulerSolutions
# Problem 10
# Summation of primes(Sieve Of Eratosthenes)

# I wish you try attempting the problem yourself before
# looking at the solution.
# ...

def getSumOfPrimes(n): 
	primes=[True for i in range(n+1)] 
	sum=0
	p=2
	while (p * p <= n): 
		if primes[p]:  
			for i in range(p * p, n+1, p): 
				primes[i] = False
		p += 1

	for p in range(2, n): 
		if primes[p]:
			sum=sum+p
	
	return sum


if __name__=='__main__': 
	print("Python Rocks!") 

# ProjectEulerSolutions
# Sarthak Jain 