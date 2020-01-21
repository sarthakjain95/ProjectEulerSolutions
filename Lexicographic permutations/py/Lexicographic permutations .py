
# https://github.com/sarthakjain95/ProjectEulerSolutions
# Problem 24
# Lexicographic permutations

# Please try attempting the problem yourself before
# looking at the solution.
# ...

from itertools import permutations

if __name__ == "__main__":

	nums= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	permutes= list(permutations([*nums]))

	print(permutes[999999])

# ProjectEulerSolutions
# Sarthak Jain