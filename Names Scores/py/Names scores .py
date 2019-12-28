
# https://github.com/sarthakjain95/ProjectEulerSolutions
# Problem 22
# Names scores

# Please try attempting the problem yourself before
# looking at the solution.
# ...

names_file= open("names.txt",'r')
names_list= names_file.read()
names_file.close()

names_list= names_list.strip().split(',')
names_list.sort()

total_score= 0

for d in range(0,len( names_list)):

	name_score= 0
	
	for c in list(names_list[d].replace('"','')):
		name_score+= ord(c) - 64
	name_score*= d+1
	
	total_score+= name_score
	# print( names_list[d], name_score)


print("Total of all Name Scores is:",total_score)

# ProjectEulerSolutions
# Sarthak Jain