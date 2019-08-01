 
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 3
// Largest Prime Factor

// I wish you try attempting the problem yourself before
// looking at the solution.
// ...

// Every integer n>1 has unique factorisation as product of prime numbers.
// n = p_0 * p_1 * ... * p_{m-1}, 
// where each p_i > 1 is prime (not necessarily unique)

function GetPrimeFactors(num) {
	let pFacto = [], flag=1;
	for (let i = 2; i <= num; i++) {
		if (num % i === 0) {
			num /= i;
			if (  (i%2!==0 && Math.sqrt(i)%1!==0) || i===2  ) {
				for(let x of pFacto) if( i%x === 0 ) continue;
				pFacto.push(i);
			} 
		}
	}
	for(let x of pFacto) if( num%x === 0 ) flag=0;
	if( num%2!==0 && pFacto.indexOf(num)==-1 && num!==1 && flag){ 
		pFacto.push(num);
	}
	console.log("All Prime Factors are:",...pFacto);
	// return Math.max.apply( Math , pFacto );
	return pFacto[pFacto.length-1];
}

// So you basically start checking with n(>1) to see if any number
// completely divides the value. If it does, you divide the value.
// The final value that remains will be a prime. 
// While continously you also have to check is the number tha
// completely divides is a multiple of previously encountered
// prime numbers.

// GetLargestPrimeFactor();

// ProjectEulerSolutions
// Sarthak Jain
