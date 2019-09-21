
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 18
// Maximum path sum I

// Please try attempting the problem yourself before
// looking at the solution.
// ...

function getMaxSumPath(triangle){
	let choices=[];
	for(let i=triangle.length-2;i>=0;i--){
		for(let n=0;n<triangle[i].length;n++){
			choices= [ triangle[i+1][n], triangle[i+1][n+1] ];
			if(choices[0]>choices[1]) 
				triangle[i][n]+= choices[0];
			else 
				triangle[i][n]+= choices[1];
		}
	}
	return triangle[0][0];
}

// ProjectEulerSolutions
// Sarthak Jain