function sayMyName(){
    console.log("Akash Dixit");
}

sayMyName() //EXECUTION
//sayMyName // TELL ONLY REFERENCE ki function waha rahta h

// function add(n1,n2){  // n1,n2 parameters
//     console.log(n1+n2); 
// }
add(5,6) // here argument
add(4,"4") // no checking 
add(6,"a") // no checking 

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function add(n1,n2){  // n1,n2 parameters
    return n1+n2;
    console.log("hi"); // UNREACHABLE CODE
}

const result =add(88,90)
console.log("result", result);


function loginusermessage(username="sam"){ // default parameter
    if(username=== undefined) //or !username 
    {
        console.log("please enter username");

    }
   return `${username} just logeed in`
}

const message =loginusermessage("Akash")
console.log(message);
loginusermessage()


//   CASE OF FUNCTION WHHERE WE DONT KNOW HOW MUCH PARAMETER WILL BE RECUIRED LIKE IN SHOPPING CART

function calcprice(K,...num){   /// REST OPERATOR  // WILL PACK VALUE IN PACKEDIN ARRAY
    return num

}
console.log(calcprice(200,600,700));  // 200 TO K 

// ... IT IS BOTH A SPREAD AS WELL AS REST OPERATOR IT DEPENDSON ITS USECASE..

// HOW TO PASS OBJ TO FUNCTION AS PARAMETER

const product ={
    item:"butter",
    price:300
}

function fk(anyObject){
    console.log(`item is ${anyObject.item} and price is ${anyObject.price}`);

}
fk(product)
// WE CAN ALSO PASS OBJECT INSIDE FUNCTION CALL 
// fk({
//     define obj
// })

// SIMILARLY HOW TO PASS ARRAY IN FUNCTION AS PARAMETER

const arr=[100,200,400]
function printarray(getarr){
    console.log(getarr);

}
printarray(arr)
printarray(["Ak","bk",10]) // direct passing arr as parameter 
console.log(arr);