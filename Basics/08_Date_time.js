// Dates

let myDate =new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(typeof myDate);
// console.log(myDate.getTimezoneOffset())
// let mycreateDate=new Date(2023, 5 ,24)
// console.log(mycreateDate.toDateString());

// let myTimeStamp =Date.now()
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.toLocaleString('default',{
    weekday: "long",month:"short",year:"numeric"
    
}));