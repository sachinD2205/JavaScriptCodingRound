

//! with the arguments 


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

fullNamePrint.call(firstStudent,"Pune","Maharashtra");
fullNamePrint.call(secondStudent,"Mumbai","Goa");