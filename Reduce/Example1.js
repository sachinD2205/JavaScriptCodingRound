// Largest Transaction:
// Implement a function findLargestTransaction(transactions) that returns the transaction object with the largest amount.

const transactions = [
    { id: 1, amount: 500, type: 'debit' },
    { id: 2, amount: 8888888, type: 'credit' },
    { id: 3, amount: 1798700, type: 'debit' },
  ];
  
  
  
  const  findLargestTransaction  = (props) =>{
      
    const tempData =  props.reduce((acc,crr)=> {
        
        if(acc?.amount < crr?.amount){
            acc = crr
        }else{
            acc 
        }
        return acc
        
      },{id:null, amount:0, type:null})
      
      return tempData ;
      
  }
  
  
  console.log("ABD",findLargestTransaction(transactions));
  
  
  
  
  
  
  
  