// IMMEDIATELY ENVOKED FUNCTION EXPRESSION     //TO PREVENT POLLUTION FROM GLOBAL  ICE CREAM EG

// function chai(){
//     console.log("DB CONNECTED");
// }
// chai()    

(function chai(){
    console.log("DB CONNECTED");  // NAMED IIFE
    
})(); // to end context of iife use ;
// ()() first () for defination second for execution

// iife as arrow function
(()=>{
    console.log("DB CONNECTED rtwo");
})();

// ARROW IIFE WITH PARAMETER
((name)=>{
    console.log("DB CONNECTED rtwo",name);
})("akash")  