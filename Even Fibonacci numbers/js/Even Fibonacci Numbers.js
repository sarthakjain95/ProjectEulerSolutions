
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 2
// Even Fibonacci numbers

// I wish you try attempting the problem yourself before
// looking at the solution.
// ...

function GetEvenFibboSum(limit){ 
	let num1=0, num2=1, sum=0;
	for(let fibbo=0;;){
		fibbo = num1 + num2;
		if(fibbo>limit) break;
		num1 = num2;
		num2 = fibbo;
		if( fibbo%2==0 ) sum+=fibbo;
	}
	return sum;
 }

console.log("Sum is", GetEvenFibboSum(4000000) );

// ProjectEulerSolutions
// Sarthak Jain
