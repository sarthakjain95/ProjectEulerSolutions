// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 5
// Smallest Multiple

// I wish you try attempting the problem yourself before
// looking at the solution.
// ...

let factors = {};

function addToFactors(arr){
	let count = {};
	for( let a of arr ){
		if( count[a] === undefined ) count[a]=1;
		else count[a]++;
	}
	for( let val of Object.keys(count) )
		if( factors[val] === undefined || factors[val] < count[val])
			factors[val] = count[val];
}

function addFactorsOf(c){
	let facto = [];
	for( let i=2; i<=c; i++ )
		for( ; c%i==0 ; ){
			c/=i;
			facto.push(i);
		}
	facto.push(c);
	facto.splice( facto.indexOf(1) , 1 );
	addToFactors(facto);
}

function SmallestMultiple(limit){
	for( let i=2; i<=limit; i++ ) addFactorsOf(i);
	let res=1;
	for( let i of Object.keys(factors) ) res*=( Number(i)**factors[i] );
	return res;
}

// SmallestMultiple(n);

// ProjectEulerSolutions
// Sarthak Jain


