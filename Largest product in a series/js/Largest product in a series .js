
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 8
// Largest product in a series

// I wish you try attempting the problem yourself before
// looking at the solution.
// ...

var queStr = "";
let numbersList = [];
let largest = 1;

function getLargestProduct(len){
	if( queStr.length < len ) return 0;
	if( queStr.length === len ){
		for(let digit of queStr.split('')) largest *= Number( digit );
		return isNaN(largest) ? 0 : largest;
	}

	queStr=queStr.split('');

	let i=0;

	for(; i<len ;i++){ 
		numbersList.push( queStr[i] );
		largest*=Number(queStr[i]); 
	}
	
	for(; i<queStr.length ;i++){
			if( numbersList.reduce( (a,b)=>a*b ) > largest )
				largest = numbersList.reduce( (a,b)=>a*b );
			numbersList.splice( 0 , 1 );
			numbersList.push( queStr[i] );
	}

	return largest;
}

// ProjectEulerSolutions
// Sarthak Jain