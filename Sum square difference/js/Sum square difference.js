// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 6
// Sum square difference

// Please try attempting the problem yourself before
// looking at the solution.
// ...

function GetSomeDifference(lim){
	let res=0, temp=0;
	for(let i=0;i<=lim;i++) res+= i**2;
	for(let x=0;x<=lim;x++) temp+=x;
	res = temp ** 2 - res;
	return res;
}

// ProjectEulerSolutions
// Sarthak Jain
