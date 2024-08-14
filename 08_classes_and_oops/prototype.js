let myName='Akash     ';
console.log(myName.length);
let myHeros=["thor,'spiderman"]

let heropower= {
    thor:"hammer",
    spiderman:'sling',
    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.akash=function(){
   console.log(`akash is present in all obj`);
   
}
Array.prototype.heyakash=function()
{
    console.log(`love u zindagi`);
    
}
console.log(heropower.akash());
console.log(myHeros.akash());
console.log(myHeros.heyakash());
//console.log(heropower.heyakash());

// prototypal inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()