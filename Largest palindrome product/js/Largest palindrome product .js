
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 4
// Largest palindrome product

// I wish you try attempting the problem yourself before
// looking at the solution.
// ...

// It's Wide. I know.
function isPalindrome(num){
	num=num.toString();
	if(num.length%2===0){
		return num.slice(0,num.length/2)===num.slice(num.length/2,num.length).split('').reverse().join('').replace(/,/g,'');
	}else{
		return num.slice(0,Math.floor(num.length/2))===num.slice(Math.floor(num.length/2)+1,num.length).split('').reverse().join('').replace(/,/g,'');
	}
}

function getLargestPalindrome(n){
	let largest=0, temp=0;
	for( let i=10**(n-1); i<10**n; i++ )
		for( let x=10**(n-1); x<10**n; x++ ){
			temp=x*i;
			if( isPalindrome(temp) && temp>largest ) largest=temp;
		}
	return largest;
}

getLargestPalindrome(3);

// ProjectEulerSolutions
// Sarthak Jain
