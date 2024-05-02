// const coding =["js","java","cpp","py"]
// coding.forEach( function (item){
//     console.log(item);
// } )
// //for each is prototype in arr and we use callback function (without name)
// coding.forEach((i)=>console.log(i))

// coding.forEach((item,index,array)=>console.log(item,index,array))

// // function can be passs as parameter in call back function

// function printme(i)
// {
//     console.log(i);
// }
// coding.forEach(printme)  // giving reference of printme not its execution



const mycode =[
    {
        lang:"python",
        abv:"py"
    },
    {
        lang:"javascript",
        abv:"js"
    },
    {
        lang:"ruby",
        abv:"rb"
    }
]
mycode.forEach((item)=>{
    console.log(item.lang);
    console.log(item.abv);

})