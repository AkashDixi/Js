//belw user is objectliteral ie it is literally a object
//to tell that we are taling about current context this keyword is use
const user={
    username:"AKASH",
    logincount:7,
    signnedin:true,
    getuserdetails:function()
    {
        console.log(`username:${this.username}`);
        console.log(this);
        
        
    }
}
//console.log(user.getuserdetails());
console.log(this);


//new keyword is use to store multiple instance from same obj without affecting the value of previously
//created instance
function kser(username,logincount,signnedin){
    this.username=username
    this.logincount=logincount
    this.signnedin=signnedin
    return this //wheather u write it or not it get explix=citally return
}
const userone=new kser("Ak",7,true)
console.log(userone);
const usertwo=new kser("kk",5,false)
const userthree=new kser()
console.log(userthree);
//new keywrd create new empty obj and cnstructor fuun get called which packed all arg
//and inject it to the new created  instance of that obj 


