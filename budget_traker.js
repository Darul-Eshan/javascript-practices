const userName=prompt('Enter you Name:');
const income=parseFloat(prompt("Enter you total Income:"));

 const numberOfExpenses=parseInt(prompt("Enter your expenses:"));
 
 if(isNaN(income)|| isNaN(numberOfExpenses)||income<=0|| numberOfExpenses<0)
 {
    console.log('Invalid input. Please enter valid number')
 }
 else{
    let totalExpenses=0;

    for(let i=1; i<=numberOfExpenses; i++){
        let expense=parseFloat(prompt(`Enter expense ${i}:`));
        if(isNaN(expense)|| expense<0){
            console.log(`Invalid expense amount for ${i}. Please enter a valid number.`);
 
    expense=0;
           } 
        totalExpenses+=expense;
    }
   
let tax = income * 0.5;

let netIncome = income - tax;

let balance = netIncome - totalExpenses;

let savings = balance * 0.2;
let finalStatus = '';

if (savings >= 1000) {
    finalStatus = 'Good';
} else if (savings < 1000 && savings >= 500) {
    finalStatus = 'Average';
} else {
    finalStatus = 'Poor';
}

let overspendingMessage = '';
if (totalExpenses > netIncome) {
   overspendingMessage = 'Warning: You are overspending!';
}

console.log('Total Expenses: $' + totalExpenses);
console.log('Net Income: $' + netIncome);
console.log('Balance after expenses: $' + balance);
console.log('Savings (20% of balance): $' + savings);
console.log('Financial Status: ' + finalStatus);
console.log(overspendingMessage);
}
        

