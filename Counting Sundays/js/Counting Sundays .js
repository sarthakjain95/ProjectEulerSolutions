
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 19
// Counting Sundays

// Please try attempting the problem yourself before
// looking at the solution.
// ...

function isLeap(y){
	if(y%4==0)
		if(y%100==0)
			if(y%400==0)
				return true
			else
				return false
		else
			return true
	else
		return false
}

let days_passed= 365 // 1900 has passed

let weekDays= [0, 0, 0, 0, 0, 0, 0]
// for weekDays
// 0 -> Monday
// 1 -> Tuesday
// ...
// 6 -> Sunday

for(let year=1901; year<2001; year++){
	
	let month_data;
	
	if(isLeap(year)) month_data= [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	else month_data= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	for(const month of month_data){
		weekDays[ (days_passed + 1) % 7 ] += 1
		days_passed+= month
	}
}

console.log("Number Of Sundays in First of the Month:", weekDays[6])
console.log("WeekDays Data:", weekDays)

// ProjectEulerSolutions
// Sarthak Jain
