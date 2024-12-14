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

const mergeObject = (currentObj, updatedObj = {}) => {
  for (let key in currentObj) {
    if (typeof currentObj[key] != "object") {
      updatedObj[key] = currentObj[key];
    } else {
      mergeObject(currentObj[key], updatedObj);
    }
  }

  return updatedObj;
};

console.log(mergeObject(myDetails));
