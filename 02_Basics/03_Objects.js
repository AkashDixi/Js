//  Singelton  with constructor not with literals
// object declaration .. te=wo ways .. literals and constructor (Object.create)
//object literals
const mysem =Symbol("mykey1")
const Jsuser ={
    name : "Akash",
    age : 21,
    [mysem]:"key1", // correct way to use symbol inside obj
    loc :"kanpur",
    email :"akash@google.com",
    isLoggedIn :false,
    lastlogindays:["Mon","Sat"]
}
console.log(Jsuser.email);
console.log(Jsuser["email"]);//square notation
console.log(Jsuser[mysem]); // to be use in sq notation
console.log(typeof Jsuser[mysem]);
console.log(typeof mysem);
//Object.freeze(Jsuser);// freeze changes in obj
console.log(Jsuser) //on [mysem ] printing Symbol(mykey1) but when use mysem not treating as
//symbol but as key

Jsuser.greeting =function(){
    console.log("hello js user");
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting);
Jsuser.greetingtwo =function(){
    console.log(`hello ${this.name}`);  // to reference same obj this
}
console.log(Jsuser.greetingtwo());
// u can access obj with dot and sq notation