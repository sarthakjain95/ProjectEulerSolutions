
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 26
// Reciprocal cycles

// Please try attempting the problem yourself before
// looking at the solution.
// ...

function getReciprocalCycles(divisor, dividend=1){

 	let nums= [];

 	for(let i=0;;i++){
 		// If the dividend is never seen before, add it.
		if( nums[dividend] == undefined ){
			// Add the dividend to the list
			nums[dividend]= i;
			// Get new divident
			dividend= dividend*10 % divisor;
		}else{
			// If it has occured before, then the repeating string will occur from it's
			// last occurence(in quotient string) to it's current occurence.
			// i - nums[dividend] basically gives out the repeating string length
			return i - nums[dividend];
		}
 	}

}


let max_num= 2, max_res= 1;

for(let i=2; i<1000; i++){

	const res= getReciprocalCycles(i);
	if( res > max_res ){
		max_num= i;
		max_res= res;
	}
	// console.log(max_num, "Gives", max_res);
}

console.log(max_num, "gave", max_res,"cycles.");

// ProjectEulerSolutions
// Sarthak Jain