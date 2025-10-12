let fruits1 = ["apple", "banana"];
fruits.push("mango", "orange");

console.log(fruits1); 
// ["apple", "banana", "mango", "orange"]



let fruits2 = ["apple", "banana", "mango"];
let lastFruit = fruits.pop();

console.log(lastFruit); 
// "mango"
console.log(fruits2); 
// ["apple", "banana"]




let fruits3 = ["apple", "banana", "mango"];
let firstFruit = fruits3.shift();

console.log(firstFruit); 
// "apple"
console.log(fruits3); 
// ["banana", "mango"]




let fruits4 = ["banana", "mango"];
fruits.unshift("apple", "grape");

console.log(fruits4); 
// ["apple", "grape", "banana", "mango"]




let fruits5 = ["apple", "banana", "mango", "orange"];
let picked = fruits5.slice(1, 3);

console.log(picked);  
// ["banana", "mango"]
console.log(fruits5);  
// ["apple", "banana", "mango", "orange"]




let fruits = ["apple", "banana", "mango", "orange"];
let removed = fruits.splice(1, 2, "grape", "pineapple");

console.log(removed); 
// ["banana", "mango"] (removed elements)
console.log(fruits); 
// ["apple", "grape", "pineapple", "orange"]
