const mynums =[1,2,3,4,5,6,7,8,9,10]
// const newn=mynums.map((num)=>
// {return num+20})
// console.log(newn);
// //using foreach for above map
// const arr =[]
// mynums.forEach((num)=>
// {num =num+10;
// arr.push(num)})
// console.log(arr);

//##########################################  CHAINING METHOD ##############################################
const newnum=mynums
.map((num)=>{return num =num+4})
.map((num1)=>{return num1=num1*3})
.filter((num3)=>num3>40)

console.log(newnum);

/////////////////   REDUCE MEHOD ////////////////////////////////////
const array =[34,45,56,67,78]
// const myTotal =array.reduce(function(acc,currval){      // accumulator,current value,initializer
//     console.log(`acc:${acc}and currval:${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal);

//
const myTotal =array.reduce((acc,curval)=>acc+curval,0)
console.log(myTotal);

const shoppingCart=[
    {itemName:"js course",
     price:2999},
     {itemName:"python course",
     price:5999},
     {itemName:"java course",
     price:3999}

]

const price=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(price);