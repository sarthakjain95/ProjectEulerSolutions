
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 10
// Summation of primes(Sieve Of Eratosthenes)

// I wish you try attempting the problem yourself before
// looking at the solution.
// ...

let primes = [];

function getPrimes(num){

	for(let i=2;i<num;i++)
		if( primes[i] )
			for( let x=i*2; x<num; x+=i)
				primes[x] = false;

}

function sumOfPrimesBelow(n){

	for(let i=0;i<n;i++) 
		primes[i] = i;
	getPrimes(n);

	let sum=0;
	primes.splice( 0, 2 );
	for( let i=0;i<primes.length;i++)
		if(primes[i]) 
			sum+=primes[i];
	
	return sum;
}

// ProjectEulerSolutions
// Sarthak Jain 