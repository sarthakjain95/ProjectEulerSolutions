
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 20
// Factorial digit sum

// Please try attempting the problem yourself before
// looking at the solution.
// ...


let factorial_of_100= BigInt('1');

for(let i=1; i<=100; i++) factorial_of_100*= BigInt( String(i) );

sum_of_digits= factorial_of_100.toString().split('').map(a=>parseInt(a)).reduce((a,b)=>a+b);

console.log("Sum of all digits in factorial of 100 is", sum_of_digits);



// ProjectEulerSolutions
// Sarthak Jain