
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 13
// Large sum

// Please try attempting the problem yourself before
// looking at the solution.
// ...

function getLargeSum( numsList , digits ){
	let res=0;
	
	for( let num of numsList ) res += Number(num);
	res=String(res);
	
	try{
		if( res.replace('.','').length<digits ) throw new Error("Cannot give out more digits than computed result");
		if( isNaN(res) ) throw new Error("Invalid number in given list.");
	}catch(err){
		console.error(err);
		return -1;
	}
	
	res = res.replace('.','').split('').slice(0,digits).join('').replace(/,/g,'');

	return res;
}

// ProjectEulerSolutions
// Sarthak Jain