
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 22
// Names scores

// Please try attempting the problem yourself before
// looking at the solution.
// ...

let names_list= [];
const fs = require('fs');

try{  
	var data = fs.readFileSync('names.txt', 'utf8');
	// console.log(data.toString()); 
	names_list= data.toString().trim().split(',');
	// console.log(names_list);   
}catch(e){
	console.log('Error:', e.stack);
}

const add= (a,b)=>a+b;
const name_to_score= name=>name.replace(/\"/g,'').split('').map( ch=>(ch.charCodeAt(0)-64) ).reduce(add);

names_list= names_list.sort();
total_names_score= names_list.map( (e,i)=>name_to_score(e)*(i+1) ).reduce( add )

console.log( total_names_score );

// ProjectEulerSolutions
// Sarthak Jain