// -------------- STACK AND HEAP MEMORY-----
//  Primitive datatypes get memory in Stack..
// Non-Primitive datatypes get memory in Heap..

let score = 33;
let nextScore = score;

//console.log(nextScore)
nextScore = 10;
// console.log(nextScore)
// console.log(score)         // nextScore is given a copy of score variable and  is not actually referencing score

let user = {
    username : "Kasim-kc",
    pass : "KASIMFOR10"
}

let userOne = user;
// console.log(userOne);

// userOne.username = "kas-c";
// console.log(user);


// ----------------------************ STRINGS *******---------------\

// Concatenation of Strings Using String Interpolation(` `)
let name = "Kasim";
let age = 21;
// console.log(`Hello my name is ${name} and my age is ${age}`);    // This method takes help of placeholders and inject values them.


// Another way to declare a string..
const gameName = new String('kasim-kc');     // String as Object
// console.table([typeof gameName, typeof name]);

// console.log(gameName[1]);     // Accessing an index of a string
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));      // returned first index of 'k' though there exist one more..

// Sub-string
const newString = gameName.substring(0,5);
// console.log(newString);

// console.log(`String length ${gameName.length}`)
const anotherString = gameName.slice(-1,7);
// console.log(anotherString);


// trim - replace
const newStringOne = "    kasim   ";
// console.log(newStringOne)
// console.log(newStringOne.trim())   // Trims the spaces

// /n for new line

// replace
const url = "https://kasim.com/kasim%20kc";
console.log(url.replace('%20','-'));

console.log(url.includes('kasim'));

console.log(gameName.split('-'));      // divides string on parameter passed..
