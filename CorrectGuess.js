let gameNumber=25;
let userNumber=prompt("Guess the Number");

while(userNumber != gameNumber){
    userNumber=prompt("You entered Wrong ,Please Enter Again");
}

console.log("You entered Correct Number");