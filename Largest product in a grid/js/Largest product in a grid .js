
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 11
// Largest product in a grid

// Please try attempting the problem yourself before
// looking at the solution.
// ...

function GetLargestDigonalProduct( arr , len ){
	let largest=1;
	
	try{
		for( let row of arr ){
			if( row.length != arr.length ) 
				throw new Error("Only square 2D arrays work");
			for( let elem of row )
				if( typeof(Number(elem)) != "number" ) 
					throw new Error("Works only with numbers");
		}
	}catch(err){
		console.log(err);
		return "Could not be computed";
	}

	let lim=true;
	for(let i=0; i<arr.length-len; i++){
		for(let j=0; j<arr.length-len; j++){
			if(i==arr.length-len){ lim=false; }
			if( arr[i][j]*arr[i][j+1]*arr[i][j+2]*arr[i][j+3] > largest ){ //right
				
				largest = arr[i][j]*arr[i][j+1]*arr[i][j+2]*arr[i][j+3];
			
			}else if(lim && arr[i][j]*arr[i+1][j+1]*arr[i+2][j+2]*arr[i+3][j+3] > largest){ //digonal right

				largest = arr[i][j]*arr[i+1][j+1]*arr[i+2][j+2]*arr[i+3][j+3];
			
			}else if(lim && arr[i][j]*arr[i+1][j]*arr[i+2][j]*arr[i+3][j] > largest){ //down
				
				largest = arr[i][j]*arr[i+1][j]*arr[i+2][j]*arr[i+3][j];
			
			}else{
				if(lim){
					// digonal left
					for( let x=0; x<4; x++ ) if( arr[i+x][j-x]===undefined ) continue;
					
					if(arr[i][j]*arr[i+1][j-1]*arr[i+2][j-2]*arr[i+3][j-3] > largest){
						largest = arr[i][j]*arr[i+1][j-1]*arr[i+2][j-2]*arr[i+3][j-3];
					}
				}
			}
		}
	}	

	return largest;
}

// ProjectEulerSolutions
// Sarthak Jain