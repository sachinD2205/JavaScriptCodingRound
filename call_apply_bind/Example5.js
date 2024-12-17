
const  name ={
    firstName:"Ajit",
    lastName:"Durge",
}

const name2 ={
    firstName:"Vijay",
    lastName:"Patil"
}

const getFullNameWithAddress = function (city) {
    console.log(this?.firstName +" " +this?.lastName+" " +city );
}


const fullNameWithAddress = getFullNameWithAddress.bind(name,"pune");
console.log(fullNameWithAddress);
fullNameWithAddress();