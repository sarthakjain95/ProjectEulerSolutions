
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 9
// Special Pythagorean triplet

// I wish you try attempting the problem yourself before
// looking at the solution.
// ...

function getPythagoreanTriplet(limit){
	let k=0;
	for( let i=1; i<=limit ; i++ )
		for( let j=i+1; j<=limit ; j++, k=limit-i-j)
			if( (i*i + j*j)===k*k ) 
				return (i*j*k);
	
	return "not found!";
}

// ProjectEulerSolutions
// Sarthak Jain