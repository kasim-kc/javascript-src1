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

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])