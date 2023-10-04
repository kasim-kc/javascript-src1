// Implicit Defn Of the datatype by javascript..
const score = 400

const balance = new Number(100)   // Explicitly defined the datatype to be a number..
// console.log(balance);

// An object gets defined which of type number..
//console.log(typeof balance)

// console.log(balance.toString().length);    // Get additional properties of String after conversion

// console.log(balance.toFixed(2));      // A property to assigned inside toFixed paranthesis..
// Used in E-commerce sites for Better Precision

const otherNumber = 123.8966             // Count digits from left
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toPrecision(3));          // It returns a String..

const hundreds = 1000000
// console.log(hundreds.toLocaleString());            // returns string containing ','(comma) in default US Standards of 
                                                   // measuring

// console.log(hundreds.toLocaleString('en-IN'));     // Indian Standard



// ++++++++++++++++++++++++ MATHS ++++++++++++++++++++++
console.log(Math);
// An Object in itself of great importance with properties and func. attached to it used using . operator

// ..Important Properties and functions..
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));


// console.log(Math.ceil(4.5));
// console.log(Math.floor(4.2));

// console.log(Math.min(4,3,5,6,7));


// Most used Math library function --> random()  --> always gives values between 0 and 1..
console.log(Math.random());
console.log((Math.random()*10) + 1);   // + 1 to Avoid the possibility of generating a 0.01 num..


// Trick to control decimal places..
const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1)); 
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
