// In comparison problem come when we try to compare different datatypes.
console.log("2">1)    // Js will automatically convert "02" and "2" to number
console.log("02">1)   //  Thats why we dont get predictible o/p
console.log(null>0);   //F
console.log(null==0);  //F
console.log(null>=0);  //T
console.log(null<=0);  //T
//Reason of above op is that in js comparisons > >= < <= and equality check == work differently 
// comparison convert null to number ie 0
console.log(undefined ==0);  //F
console.log(undefined >=0);  //F
console.log(undefined <=0);  //F    // all here undefined converted to NAN 
// SO COMPARISONS CONVERT Some into 0 NAN 

//=== it checks value strictly itnot only check value but also its datatype
console.log("0" === 0); // no conversion here op False 
