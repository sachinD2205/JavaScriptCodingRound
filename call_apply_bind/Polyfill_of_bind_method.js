


// bind method polyfill 


// lets create a function we call as myBind Method 

// accessible for all function to make that we need to add Function.prototype at start of function it makes avilible that method for all functions
// we not to to store function in variable 



Function.prototype.myBind = function(arg1,...otherArgs){
    
    // arg1 always referse to this 
    // console.log("arg1",arg1,this);
    let obj = this;
    
    return function (...otherArg){
        
        obj.apply(arg1,[...otherArgs,otherArg]);
        
        console.log("innerFunctionInvoced",[...otherArgs,...otherArg]);
        
    }

}


const printFullName = function (city,state){

console.log(this?.firstName + " " + this?.lastName +" " + city+" " + state);

}

const name ={
    firstName:"sachin",
    lastName:"durge"
}




const printNamef = printFullName.myBind(name,"pune");
printNamef("maharashtra");





