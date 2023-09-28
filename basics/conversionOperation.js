let score = 33;

console.log(typeof score);
console.log(typeof (score));    // Two ways to check typeof..

let score1 = '33';
console.log(typeof score1);

//Type Conversion 
let valueInNumber = Number(score1);
console.log(typeof valueInNumber);     // Number , String and such classes exist in JS for typeconversion

// TypeConversion Confusion
let num = '33abc';
let val = Number(num);
console.log(typeof val);     // Shows that string got converted  to num but what about abc..

// On printing val
console.log(val);        // Gives Not A Number..

// Irony :-> Type of NaN is number ..

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn);

let isLoggedIn1 = "Kasim"
let booleanIsLoggedIn1 = Boolean(isLoggedIn1);

console.log(booleanIsLoggedIn1);