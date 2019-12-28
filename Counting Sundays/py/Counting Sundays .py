
# https://github.com/sarthakjain95/ProjectEulerSolutions
# Problem 19
# Counting Sundays

# Please try attempting the problem yourself before
# looking at the solution.
# ...

def isLeap(y):
	if y%4==0:
		if y%100==0:
			if y%400==0:
				return True
			else:
				return False
		else:
			return True
	else:
		return False

days_passed= 365 # 1900 has passed

weekDays= [0, 0, 0, 0, 0, 0, 0]
# for weekDays
# 0 -> Monday
# 1 -> Tuesday
# ...
# 6 -> Sunday

for year in range(1901, 2001):
	
	if isLeap(year): month_data= [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	else: month_data= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

	for month in month_data:
		weekDays[ (days_passed + 1) % 7 ] += 1
		days_passed+= month

print("Number Of Sundays in First of the Month:", weekDays[6])
print("WeekDays Data:", weekDays)

# ProjectEulerSolutions
# Sarthak Jain
