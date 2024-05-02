// TRUTHY AND FALSY   WE assume things like string or arrays to be true or false

const UserEmail =""
if (UserEmail)
{
    console.log("Got Email");
}
else
{
    console.log("NO Email");
}

// falsy value 
//false , 0,-0, BigInt 0n, "", null, undefined,NAN
//Truthy Value
//"0" , "false"," ".[],{} ,function(){} (Its Empty Function)

//To check empty array and object
const arr =[]
const obj ={}

if (arr.length===0)
{
    console.log("Empty array");
} 

if(Object.keys(obj).length==0)
{
    console.log("Empty Object");
}
//false == 0   true
// false==""   true
// 0==""       true



// $$$$$$$$$$$$$$$$$$$$$$$ NULLISH COALESCING OPERATOR (??): null undefined $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
let val1;
val1 =5??10;
let val2,val3;
console.log(val1);    //error handling
val2 =undefined??60
val3=50??null
//val3 =null??undefined
console.log(val2,val3);

// TERNARY OPERATOR
//condition ? true : false

const b = 200;
b>=50 ? console.log("greater than 50") : console.log("less than 50");
