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
const gameName = new String('kasimkc');     // String as Object
// console.table([typeof gameName, typeof name]);

// console.log(gameName[1]);     // Accessing an index of a string
// console.log(gameName.__proto__);

console.log(gameName.length);