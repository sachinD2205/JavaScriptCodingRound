
// Make an Object which has only property/value 
// find  are common in both input objects [Note both keyandValue need to match]

const input1 = {a:1,b:2,c:3,d:10,e:12};
const input2 = {a:2,e:12,f:6,d:10};
const expectedOutput = {d:10,e:12};


// we can iterate objects using for in loop 
// if we iterate object we cannot access object using . we need to use curly braces
// because key in strings 

const findDuplicates = (input1,input2) => {


const result ={};
for(const key in input1){
    if(input2[key]== input1[key]){
        result[key] = input1[key];
    }
}
return result;

}

console.log("result",findDuplicates(input1,input2));