
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 14
// Longest Collatz sequence

// Please try attempting the problem yourself before
// looking at the solution.
// ...

function longestCollatzSequenceFor(n){
	let counter=0, obj={}, ans=0;
	obj['0']=0;
	for(let i=n,pos=i;  i>1  ;i--,pos=i,counter=0){
		while(pos!=1){
			if(pos%2==0) pos/=2;
			else pos = 3*pos+1;
			counter++;
		}
		if( counter>obj[ans] ){
			obj={}; ans=i;
			obj[ans] = counter;
		}
	}
	return ans;
}

// ProjectEulerSolutions
// Sarthak Jain
