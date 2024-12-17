// Transaction Filtering:
// Write a function filterTransactions(transactions, type) that takes an array of transactions and a transaction type ('debit' or 'credit'), and returns an array containing only the transactions of the specified type.with the largest amount.

const transactions = [
    { id: 1, amount: 500, type: 'debit' },
    { id: 2, amount: 8888888, type: 'credit' },
    { id: 3, amount: 1798700, type: 'debit' },
  ];
  
  
  
  const  filterTransactions  = (transactions,type) =>{
      
    const tempData =  transactions.reduce((acc,crr)=> {
       
       if(crr?.type == type){
           acc.push(crr);
       }
       
       return acc
        
      },[])
      
      return tempData ;
      
  }
  
  
  console.log("ABD",findLargestTransaction(transactions,"credit"));
  
  
  
  
  
  
  
  