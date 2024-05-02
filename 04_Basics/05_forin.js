const myobj ={
    js:"javascript",
    cpp:"c++",
    py:"python",
    rb:"ruby"
}
for (const key in myobj) {
    console.log(key); 
    console.log(myobj[key]);// for val printing

    }

const myarr =["js","py","java","c","cpp","ruby"]
for (const key in myarr) {
    console.log(key);
    console.log(myarr[key]);
   
    }

// cant use forin on map as its not iterable
