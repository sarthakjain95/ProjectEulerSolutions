
# https://github.com/sarthakjain95/ProjectEulerSolutions
# Problem 21
# Amicable numbers

# Please try attempting the problem yourself before
# looking at the solution.
# ...

def sum_of_proper_divisors(n):

	sum_of_divisors= 0
	for i in range(1,n):
		if n%i == 0:
			sum_of_divisors+= i
	
	return sum_of_divisors
	
sum_of_AmicableNumbers= 0
counter=0
AmicablePairs= []

for i in range(1, 10000):
	
	temp= sum_of_proper_divisors(i)
	if temp==i or i in AmicablePairs: continue

	if sum_of_proper_divisors(temp) == i:
		print( i, temp )
		AmicablePairs.extend([temp,i])
		counter+=1
		sum_of_AmicableNumbers+= temp+i

print(counter,"Amicable Number(s) found.")
print("Sum is",sum_of_AmicableNumbers)

# 31626

# ProjectEulerSolutions
# Sarthak Jain