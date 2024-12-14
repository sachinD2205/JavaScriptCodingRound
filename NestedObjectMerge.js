// Nested Object merge into single object
// let obj = {};
const mergeNestedObject = (currObj, targetObj = {}) => {
  for (let key in currObj) {
    currentValue = currObj[key];

    if (
      typeof currentValue === "object" &&
      typeof currentValue !== null &&
      !Array.isArray(currentValue)
    ) {
      mergeNestedObject(currentValue, targetObj);
    } else {
      targetObj[key] = currentValue;
    }
  }
  return targetObj;
};

const myDetails = {
  name: "sachin",
  place: "karad",
  education: {
    edu: "MCA",
    place: "Pune",
  },
  company: {
    companyName: "probity soft",
    companyAddress: {
      companyPlace: "Baner",
    },
  },
};

console.log("result", mergeNestedObject(myDetails, {}));
