const username = "admin";
const income = 5000;

let rent = 1500;
let groceries = 600;
let utilities = 300;
let transportation = 400;

let totalExpenses = rent + groceries + utilities + transportation;

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
