
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 1
// Multiples of 3 and 5

// I wish you try attempting the problem yourself before
// looking at the solution


function GetSumOfMultiples(limit){
	let sum = 0;
	for(let i=0;i<1000;i++){
		if( i%3==0 || i%5==0 ) sum+=i;
	}
	return sum;
}


console.log(GetSumOfMultiples(1000));


// ProjectEulerSolutions
// Sarthak Jain
