<<<<<<< HEAD

document.getElementById('JokesButton').addEventListener('click', jokeProcessing);

function jokeProcessing() {
    const number=parseInt(document.getElementById('numberInput').value);
    let output=document.getElementById('output');
    if(!number || number<=1){
        output.innerText="Please enter a valid number greater than 1.";
        return;
    }
    output.innerText="Processing...";
    let jokes=[];
    let completed=0;
    for(let i=0;i<number;i++){
        let xhr=new XMLHttpRequest();
        xhr.open("GET","https://api.chucknorris.io/jokes/random",true);
        xhr.onload=function(){
            if(xhr.status===200){
                let response=JSON.parse(xhr.responseText);
                jokes.push(response.value);
            }
            completed++;
            if(completed===number){
                let list ="<ol>";
                jokes.forEach(joke=>{
                    list+=`<li>${joke}</li>`;
                });
                list+="</ol>";
                output.innerHTML=list;
            }
        };
        xhr.onerror=function(){
            completed++;    
            if(completed===number){
                let list ="<ol>";
                jokes.forEach(joke=>{
                    list+=`<li>${joke}</li>`;
                }); 
                list+="</ol>";
                output.innerHTML = list + '<br>Error fetching some jokes.';
            }

    };   
      xhr.send();
    }
}
=======
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
>>>>>>> ae44a363a151864864d03e5d5841e54661da65e5
