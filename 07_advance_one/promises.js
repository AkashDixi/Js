//A promise is an object representing eventual completion or failure of assynchronous operations
//and its resulting value.
//eg of some assync request- file access(kernel),database req,cryptography
//promise has three state=> pending ,fulfilled,rejected
// mostly u consume promise u also create promise but mostly u consume it.
//To get instance ofobj u can use new keyword like that for classes.
//before promises were not directlly avail.in js then there were libraries like Q and bluebird

// const promiseOne =new Promise(function(resolve,reject){
//     //Do async call
//     //DB ,CRYPTOGRAPHY,network call
//     setTimeout(function(){
        
        
//         console.log('Async task is completed');
//         resolve()
        
//     },2020)
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hi");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("assync 2 resolves");
    
// })

// const PromiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Akash",email:"ak@eg.com"})
    
//     },2300)

// })
// PromiseThree.then(function(user){
//   console.log(user);
  
// })



// const PromiseFour =new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("promise 4");
//         let error=false;
//         if(!error)
//         {
//             resolve({username:"file1",passcode:"123"})
//         }
//         else{
//             reject('ERROR:SOMETHING WENT WRONG')
//         }
        
//     },1200)
// })

// PromiseFour
// .then((user)=>
// {
//     console.log(user);
//     return user.username
    
// })
// .then((username)=>{
// console.log(username);

// })
// .catch((err)=>{
//     console.log(err);
    
// })
// .finally(()=>{
//   console.log("Finally the promise 4 is either resolve or rejected");
  
// })


const PromiseFive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("promise 5");
        let error=true;
        if(!error)
        {
            resolve({username:"js",passcode:"123"})
        }
        else{
            reject('ERROR:js WENT WRONG')
        }
},1000)})


async function consumeps5(){
    try{
    const response=await PromiseFive
    console.log(response);
    }
    catch(error)
    {
        console.log(error);
        
    }
}

consumeps5();


//problem with async await is it cant directlly handle error so to do hey need to wrap with 
//trycatch block

// async function getalluser(){
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
//     console.log(data);
    
// }
// getalluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>
{
    return response.json()
})
.then((data)=>{console.log(data)}
)
.catch((error)=>console.log(error)
)
//fetch is a global method  that fetch for resource in network(itsa network based req) and return 
//promise
// a fetch promise only rejects when a network error is encountered(or permission access or similar)
//fetch is executing before because of the sseparate priority queue that is maintained separately