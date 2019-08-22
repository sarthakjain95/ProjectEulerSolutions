
// https://github.com/sarthakjain95/ProjectEulerSolutions
// Problem 16
// Power digit sum

// Please try attempting the problem yourself before
// looking at the solution.
// ...

const add = (a,b)=>Number(a)+Number(b);
const powerDigitsSum = (n)=>n.toString().split('').reduce(add,0);
// Use String(BigInt(Calculation))

// ProjectEulerSolutions
// Sarthak Jain