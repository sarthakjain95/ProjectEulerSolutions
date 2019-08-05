
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 10
// Summation of primes(naive approach)

// I wish you try attempting the problem yourself before
// looking at the solution.
// ...

let primes = [];

function isPrime(num){
	if( (num%2===0  || Math.sqrt(num)%1===0) && num!=2 ) return false;
	for( let pri of primes ) 
		if( num%pri === 0 ) 
			return false;
	
	return true;
}

function sumOfPrimesBelow(n){
	let sum=0;
	for( let i=2; i<n; i++ )
		if(isPrime(i)) 
			primes.push(i);
	for( let p of primes ) sum+=p;
	
	return sum;
}

// ProjectEulerSolutions
// Sarthak Jain