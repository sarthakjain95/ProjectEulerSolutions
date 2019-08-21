
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 16
// Lattice paths

// Please try attempting the problem yourself before
// looking at the solution.
// ...

function factorial(n){
	let ans=1;
	for(let i=1;i<=n;i++) ans*=i;
	return ans;
}

const getLatticePaths = n=>factorial(2*n)/(factorial(n)**2);

// ProjectEulerSolutions
// Sarthak Jain