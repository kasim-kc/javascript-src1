const accountId = 14453
let accountEmail = "kasims@google.com"
var accountPassword = "1223"
accountCity = "Pune"   // not to be used
let accountState;     // undefined
 
// accountId = 2    Changing value for const not allowed..

accountEmail = "facebook@instagram.com"
accountPassword = "2114"
accountCity = "Mumbai"

/*
Prefer not to use var due to issue of
block scope or functional scope..
*/

// console.log(accountId);
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// ------------------DATATYPES-----------
// PRIMITIVE -> On the basis of how they are stored and accessed from memory

// Primitive are call by value
// 7 types :-> String, number, Boolean, BigInt, null,undefined, Symbol

// Non-Primitive OR Reference type
// Arrays, Objects , Functions

//  Declaring Symbol
const id = Symbol('123')
const anotherId = Symbol('123')   // For uniqueness

// console.log(id === anotherId)

// Declaring Reference Types

const heroes = ["IronMan", "Thor", "Hulk"];

let IronDetails = {
    name : "Tony Stark" ,
    character: "IRON MAN"  
}

const func = function(){
    console.log("K");
}

// TypeOf null is object