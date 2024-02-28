let score = "35abc";
let n = null;
//console.log(typeof (score));

let valueInNumber =Number(score);   // All datatypes studied so far has its capital format for e.g number =>Number
//console.log(typeof valueInNumber);  //its a class type format
//console.log(valueInNumber) // produce NaN so use Number() gently and with precautions .its not strict check

let k =Number(n);
//console.log(typeof k);
//console.log(k);

// CONVERSION TO NUMBER DATATYPE
// "33"=> 33 ✔
//" 33abc"=> NAN type still shows Number
// True => 1 
//False => 0

// CONVERSION TO BOOLEAN 
//let isL="";   // Converted to false             "1"=>True   "0"=> False
let isL="Akash" // Converted to true
let isBl=Boolean(isL);
//console.log(isBl);
let isnl =""
//console.log(Boolean(isnl))

//Conversion to string 
// let h = 45
// let m = String(h)
// console.log(typeof h);
// console.log(typeof m);
//console.log(m);
// let hm =true
// let mh =String(hm)
// console.log(mh);
// console.log(typeof mh);

///////////////////////////////   OPERATIONS /////////////////////

//Why string to number

let str1 = "hello"
let str2 = "Akash"
let str3 = str1 + str2
console.log(str3);
console.log("1"+2)    //  COMPLEX SITUATIONS
console.log(1+"2")    //  COMPLEX SITUATIONS
console.log("1"+2+2)    // NEED TO STUDY ABOUT THIS  O/P =>122
console.log(1+2+"2")    // NEED TO STUDY ABOUT THIS  O/P =>32
console.log(+true);
console.log(+"");