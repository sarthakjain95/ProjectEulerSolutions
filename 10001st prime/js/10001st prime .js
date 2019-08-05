
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 7
// 10001st prime

// Please try attempting the problem yourself before
// looking at the solution.
// ...

let primes = [];

function isPrime(num){
	if( (num%2===0  || Math.sqrt(num)%1===0) && num!=2 ) 
		return false;
	for( let pri of primes ) if( num%pri === 0 ) 
		return false;
	
	return true;
}

function getNthPrime(nth){
	for(let i=2; primes.length<nth; i++) 
		if(isPrime(i)) 
			primes.push(i);
	
	return primes[ primes.length - 1 ];
}	

// ProjectEulerSolutions
// Sarthak Jain
