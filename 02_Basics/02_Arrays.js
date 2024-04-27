const marvel_heros =["thor", " ironman","spiderman"]
const dc =["superman","flash","batman"]
//marvel_heros.push(dc)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);
 const md=marvel_heros.concat(dc) // This method combines two or more array and returns new array
console.log(md);

const all_heros =[...marvel_heros,...dc]  // Spread operator method ... broken glass eg .... individual element
console.log(all_heros);
console.log(marvel_heros);

// Push ammend on existing array but concat returns new ARRAY
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array);
const real_arr= another_array.flat(Infinity);
console.log(real_arr);
console.log(Array.isArray("Akash"));
console.log(Array.from("Akash"));
console.log(Array.from({name :"Akash"})); // interesting ...confuse .. array from keys or value
let score1 =100;
let score2 =200;
let score3 =300;
console.log(Array.of(score1,score2,score3)) // Returns new array consisting of elements