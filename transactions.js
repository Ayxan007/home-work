const transactions = [
    { type: 'income', amount: 100 },
    { type: 'expense', amount: 50 },
    { type: 'income', amount: 200 },
    { type: 'expense', amount: 150 }
  ];
  
const incomes = transactions.filter(transaction => transaction.type==='income'); 
const expenses = transactions.filter(transaction => transaction.type==='expense');

const incomePrice = incomes.map(action => action.amount);
const expensePrice = expenses.map(action => action.amount);

const totalIncome = incomePrice.reduce((acc, price) => acc+price)
const totalExpense = expensePrice.reduce((acc, price)=>acc+price)

console.log('Umumi gelir',totalIncome);
console.log('Umumi xerc', totalExpense);