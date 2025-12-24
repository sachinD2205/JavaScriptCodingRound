
// "use strict"

console.log(this)


const f = () =>{
    console.log("arrow",this);
}

f();