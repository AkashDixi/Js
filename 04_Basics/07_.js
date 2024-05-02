// const coding =["js","ruby","java","python","ruby"]
// const values =coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);

//so for each does not return any values then what we ll do in case where we need to return specific 
//valuevofarray based on some conditions

const mynums=[1,2,3,4,5,6,,7,8,9,10]
//filter also take callback function in which we access each value but require to have condition
//those value who ill follow condiiton will be rturned
// const newums=mynums.filter((num)=>num>5)
// console.log(newums);
const newums=mynums.filter((num)=>{  //here we started scope with { } so need to explicitly return.
    return num>9})
console.log(newums);



// HOW TO USE SAME FUNCTIONALITY IN FOR EACH INSTEAD OF FILTER.
const newarr=[]
mynums.forEach(function(num){
    if(num>2)
    {
        newarr.push(num)
    }

})
console.log(newarr);
//book wala eg using filter