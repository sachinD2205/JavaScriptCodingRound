

const fullNamePrint = function() {
    console.log(`full Name is ${this.firstName} ${this?.lastName}`);
}

const firstStudent ={
    
    firstName:"Ajit",
    lastName:"Durge"
    
}

const secondStudent = {
    
    firstName:"Ganesh",
    lastName:"Patil"
    
}

fullNamePrint.call(firstStudent);
fullNamePrint.call(secondStudent);