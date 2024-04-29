const user ={
    username :"Sona",
    price :999,
    welcomeMessage: function()
    {
        console.log(`${this.username},welcome to website`); // this refer currwnt contet
        console.log(this); // Talk about current var /context/values
    }
}
//console.log(user);
// user.welcomeMessage()
// user.username="Sam";
// user.welcomeMessage()
console.log(this); // returns empty obj as we are in node environment but in browser we get window 
// as it is global obj

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AkashDixi
// function chai(){                          // 1st way to declare function
//     let username ="heetal"
//     console.log(this);     // this inside function in node environnmnt give lot of value
//     console.log(this.username); //undedfined ///works in contextto function only not withobj 
// }
// chai()

const chai =function(){                          //  2nd way to declare function
    let username ="heetal"
    console.log(this);     // this inside function in node environnmnt give lot of value
    console.log(this.username); //undedfined ///works in contextto function only not withobj 
}
chai()

const chai1 =()=>{    
    let username ="heetal"
    console.log(this);  
    console.log(this.username); //undedfined ///works in contextto function only not withobj 
}
chai1()


///////////////////ARROW FUNCTION 
// BASIC ARROW FUNCTION  (explict return)
// const addTwo=(n1,n2)=>{
//     return n1+n2
// }
// console.log(addTwo(9,7));

// const addTwo=(n1,n2)=> n1+n2  //implict return // no need to usse {} as statement of one line or(n1+n2)

// console.log(addTwo(9,7));


// To return obj in arrow function

const addTwo=(n1,n2)=>({username :"Akash"})
console.log(addTwo(9,7));





 
