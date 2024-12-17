let name1 = {
  firstName: "sachin",
  lastName: "durge",
  fullNamePrint: function () {
    console.log(this?.firstName + " " + this?.lastName);
  },
};

let name2 = {
  firstName: "swapnil",
  lastName: "waghulde",
};

name1.fullNamePrint.call(name2);
