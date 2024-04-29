//singelton obj using constructor
// const user = new Object();// singelton obj
// const user1 ={} // non singelton
// user.id ="123";
// user.name ="Akash"
// user.isloggedin =false
// console.log(user);

const regularuser ={
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
            fname:"Akash",lname:"Dixit"
        }
    }

}
console.log(regularuser.fullname?.userfullname.lname); // this is howcan access obj inside obj

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
//const obj3 =Object.assign({},obj1,obj2)  //good practice to give empty parenthesis to show target
//and all other source
const obj3 ={...obj1,...obj2};//spread method like array
console.log(obj3);

// ARRAY OF OBJECT

const a =[
    {
        name:"aka",
        id :"1"
    },

    {
        name:"baka",
        id :"2"
    }
];
console.log(a[1].name);
console.log( typeof Object.keys(regularuser));//return type is array obj
console.log(regularuser.hasOwnProperty("isloggedin"));

// DESTRUCTURING OF OBJECT
const course ={
    cname: "Js in hindi",
    price:999,
    instructor:"Hitesh"
}
const{instructor:i}=course; // object destructoring
// Destructuring is a JavaScript expression that allows us to extract data from arrays,
//  objects, and maps and set them into new, distinct variables.
console.log(i);

// API
//We get value fro API in json format earlier we get values in xml form
// {
//     "name":"Akash",
//     "age":"21",
//     "sex":"Male"
// }
// [
//     {},
//     { }
// ]
//In json api we can get obj as well as array of obj