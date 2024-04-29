// GLOBAL AND LOCAL SCOPE
let a =30 //global
if(true)
{
    let a =40
    console.log("inner",a);
}
console.log(a);

// NESTED SCOPE
function one(){
    const username ="Akash"
    function two()
    {
        const website ="youtube"
        console.log(username);// icecream snatching eg elder older for  two() can access  var of one()
                                //but not same implies to one()   ...parent-child
    }
    //console.log(website); // cant access
    two()
}
one()


//  SCOPE EG WITH IF BLOCK

if(true)
{
    const user ="Akash"
    if(true)
    {
        const lname = " Dixit"
        console.log(user + lname);
    }
    //console.log(lname);  not in scope
    console.log(user);
}
//console.log(user); out of scope

// ###################### HOISTING IN JS #############################
//  TWO SYNTAX TO DECLARE FUNCTION
addone(7) // run successfully // access before declaration

function addone(n)
{
    return n +1
}
//addtwo(8)  GIVES RROR CANT ACCESS BEFORE DECLARATION
const addtwo=function(n)
{
    return n +2
}