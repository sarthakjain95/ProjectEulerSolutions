
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 17
// Number letter counts

// Please try attempting the problem yourself before
// looking at the solution.
// ...

const ones={0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"};
const tens={10:"ten",11:"Eleven",12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen"};
const supports={1000:"thousand",100:"hundred",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety"};

function getNumberLetters(n){
	if(n>1000 || n<=0) return "";
	let str="";
	if(n>999){
		str+=ones[Math.floor(n/1000)];
		str+=" "+supports['1000'];
		n%=1000;
		if(n!=0 && n>99) str+=" ";
		else if(n!=0) str+=" and ";
	}
	if(n>99){
		str+=ones[Math.floor(n/100)];
		str+=" "+supports['100'];
		n%=100;
		if(n!=0) str+=" and ";
	}
	if(n<=20 && n!=0){
		if(n<10) str+=ones[n];
		else if(n<20) str+=tens[n];
		else if(n==20) str+=supports[20];
	}else if(n!=0){
		str+=supports[Math.floor(n/10)*10];
		n%=10;
		if(n!=0) str+="-"+ones[n];	
	}
	return str;
}

// ProjectEulerSolutions
// Sarthak Jain