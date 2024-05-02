// ALL LOOP DISCUSSED HERE ARE ARRAY SPECIFIC

//[ "", "",""]
//[{},{},{}]

// for of loop
const arr =[1,2,3,4,5]

// for (const iterator of object) {   HERE object means kis cheez pr loop lagana h 
    
// }

for (const val of arr) {
    console.log(val);
    
}
// for of in string 
const name ="Akash Dixit"
for (const k of name) {
    console.log(k);
}

//Maps and for of loop in map

const map =new Map()
map.set('in',"india")
map.set('us',"united state")
console.log(map);

for (const [key,val] of map) {           //destructurng of map
    console.log(key,":",val)
    
}

//for of in obj  (obj are not iterable)
const myobj ={
    "game1":"nfs",
    "game2":"spiderman"
}

console.log(myobj);
// for (const [k,v] of myobj) {                     //gives error
//     console.log(k,v);
// }