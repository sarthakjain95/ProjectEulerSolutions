
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 21
// Amicable numbers

// Please try attempting the problem yourself before
// looking at the solution.
// ...


function sum_of_proper_divisors(n){

	sum_of_divisors= 0
	for(let i=1; i<n; i++)
		if(n%i == 0) sum_of_divisors+= i
	
	return sum_of_divisors
}

let sum_of_AmicableNumbers= 0
let counter=0
let AmicablePairs= []

for(let i=1; i<10000; i++){
	
	const temp= sum_of_proper_divisors(i)
	if( temp==i || AmicablePairs.indexOf(i)!=-1) continue;

	if(sum_of_proper_divisors(temp) == i){
		console.log( i, temp )
		AmicablePairs.push(temp,i)
		counter+=1
		sum_of_AmicableNumbers+= temp+i
	}
}

console.log(counter,"Amicable Number(s) found.")
console.log("Sum is",sum_of_AmicableNumbers)


// ProjectEulerSolutions
// Sarthak Jain