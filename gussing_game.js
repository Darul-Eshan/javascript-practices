
nubmerOfLost=0;
nubmerOfWin=0;
for(var i=1; i<=5; i++){

    var guessNumber= parseInt(prompt("Enter a Number of 1-5:"));
var randomNumber= Math.floor(Math.random()*5)+1;

if(guessNumber===randomNumber){
    console.log("You are win");
    nubmerOfWin++;

}
else{
    console.log("You are lose. The correct number is: "+randomNumber);
    nubmerOfLost++;
}
}
console.log("You are win "+nubmerOfWin+" times");
console.log("You are lose "+nubmerOfLost+" times");