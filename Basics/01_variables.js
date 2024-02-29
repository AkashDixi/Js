const accountId =5678
var accountEmail="akash@gmail.com"
let accountpassword="12345"
accountcity="Kanpur"
let accountstate;

//accountId =2345   NOT ALLOWED
/*
Prefer not to use var 
Because of issue in block and functional scope
*/
console.log(accountId)
accountcity="Gurugram"
accountEmail="hc@gmail.com"
accountpassword="67890"
console.table([accountId,accountEmail,accountpassword,accountcity,accountstate])