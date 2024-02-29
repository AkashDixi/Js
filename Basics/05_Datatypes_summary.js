// datatype => primitive and non primitive 
// Primitive => 7 types : String number boolean null (empty) undefined symbol bigint  (they are call by value)
// non  Primitive (reference type ) array, objects functions   
// Js isdynamically typed lang while typescript is statically typed 
const id1 =Symbol('123')
const id2 =Symbol('123') //  Symbol provide uniqeness to (similar types ) value  
console.log(id1 == id2);
const arr =["abc","def","hjk"]  //ARRAY

let myobj ={
    name : "Akash",                                //OBJECTS
    age : 21

}

const myfunc =function(){
    console.log("hello world");     
}
 // Functions can be stored in var .
console.table([myfunc,arr,myobj])
console.log(typeof arr)
console.log(typeof myobj)
console.log(typeof myfunc)
console.log(typeof null)

// All refernce type has type as object function has funcobject
