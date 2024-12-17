

//! apply method it is exactly same as call method only difference is argument passing
//! it is also refer first argument as this 
//! second argument is need to be an a array 



const fullNamePrint = function(place,state) {
    console.log(`full Name is ${this.firstName} ${this?.lastName} and place is ${place} and state is ${state}`);
}


const firstStudent ={
    
    firstName:"Ajit",
    lastName:"Durge"
    
}

const secondStudent = {
    
    firstName:"Ganesh",
    lastName:"Patil"
    
}

fullNamePrint.apply(firstStudent,["Pune","Maharashtra"]);
fullNamePrint.apply(secondStudent,["Mumbai","Goa"]);