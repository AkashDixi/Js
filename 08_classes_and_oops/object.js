// everything is object in js fuction is also a obj .this function have working like a function but if u wantu can make it behave 
//like aobj
function multiply(num){
    return num*5
}
const a=[1,2,3,4,5]
multiply.power=2;
console.log(multiply(5));
console.log(multiply.prototype);//we get {}actually this prototype does not only give methods but some
//properties andalso has this forthat method
console.log(multiply.power);
console.log(a.prototype);

function createusuer(username,score)
{
   this.username=username
   this.score=score
}
createusuer.prototype.increment=function(){
    this.score++
}
const chai =new createusuer('chai',700);
const tea = new createusuer('tea',789)
console.log(chai);

//this means jiss
chai.increment() 

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor
 function. This means that it has access to properties and methods defined on the constructor's
  prototype.

The constructor is called: The constructor function is called with the specified arguments and 
this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.
*/