
//Balance Calculation:
// Write a function calculateBalance(transactions) that takes an array of transactions and returns the balance amount. The balance is calculated by summing the amounts of all debit transactions and subtracting the amounts of all credit transactions.

   // credit transaction 
   // debit transaction 
   // balance 




const transactions = [
  { id: 1, amount: 500, type: 'debit' },
  { id: 2, amount: 200, type: 'credit' },
  { id: 3, amount: 100, type: 'debit' },
];


const balance = transactions.reduce((acc,curr)=>{
    
    if(curr?.type == 'debit'){
       acc[curr?.type] = acc[curr?.type] + curr?.amount;
    }
    
    if(curr?.type == 'credit'){
        acc[curr?.type] = acc[curr?.type] + curr?.amount;
    }
    
    acc["balance"] = acc?.debit -  acc?.credit;
    
    return acc 

},{debit:0, credit:0,balance:0})


console.log("balance",balance);










