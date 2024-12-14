const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: {
      code: "10001",
      extension: "A",
    },
  },
  age: 30,
};

const {
  name,
  address: {
    street: StreetAaaheKa,
    city,
    zip: { code, extension },
  },
  age,
} = person;
// const {
//   name,
//   address: {
//     street,
//     city,
//     zip: { code, extension },
//   },
//   age,
// } = person;
console.log("dddddd", name, StreetAaaheKa, city, code, extension, age);
//! Note -----  for destrcturing :{filedName}  for rename :filedName

const a = [34234, 234234, 324234, 23423, 234, 234];

// for (let value of a) {
//   console.log("value", value, "--- array ", a);
// }

const abc = () => {
  let name = "sachin";
  let lastName = "durge";
  return () => {
    console.log(`first name ${name} and last name ${lastName}`);
  };
};

abc()();

(() => {
  console.log("bahva");
})();
