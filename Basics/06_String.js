const n ="Akash"
const m =700
console.log(n+ m +'love');    //string interpolation in backtics as use of placeholder
console.log(`Hello my name is ${n} and my repo count is ${m}`) // Backtick method to concatenate string
const name1 = new String('Ak-ash-ghj') // store as key value pair
console.log(name1[2]);
console.log(name1.__proto__);
console.log(name1.length);
console.log(name1.charAt(4));
console.log(name1.toUpperCase());
console.log(name1.indexOf('s'));
const name2 =name1.substring(1,3)
console.log(name2);
const anotherstring =name1.slice(-4,5) // in slice we can do negative indexing
console.log(anotherstring);
const m1= "      ahafgh    "
console.log(m1)
console.log(m1.trim())
const url ="https/:localhost/hello.com"
console.log(url.replace("he","--"));
console.log(url.includes("loca"));
console.log(name1.split('-')); // returns array