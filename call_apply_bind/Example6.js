
// Bind Method 
// bind method  used two barrow a object method

const name ={
    firstName:"Ajit",
    lastName:"Durge"
}

const myNamePrint = function (city,state) {
    
    console.log(this?.firstName + " "+ this?.lastName +" " + city + " " +state );
    
}


const printName = myNamePrint.bind(name,"karad");
printName("pune")
console.log(printName);

