//array
const myarr=[0,1,2,3,4,5]  // Js array are resizable and can contain mix datatype and are not assosiative array.
//array copy o perstion create shallow copy(same reference point )
const myheroz= new Array(1,2,3,4,5)
//console.log(myarr[3])
//Array methods
myarr.push(9)
myarr.push(10)
myarr.push(17)
myarr.pop()
myarr.unshift(5)
myarr.shift()
myarr.shift()

// console.log(myarr);
// console.log(myarr.includes(7))
// console.log(myarr.indexOf(4))
// const newarr =myarr.join() //convert arr to string
// console.log(myarr)
// console.log(newarr)
// console.log(typeof newarr);
// Slice & splice
console.log("A",myarr)
const myn1 =myarr.slice(0,3);
console.log(myn1);
console.log("B",myarr);
const myn2 =myarr.splice(1,3)

console.log(myn2);
console.log("B",myarr);
//splice manipulate org array while slice works on newarray without manipulating org array