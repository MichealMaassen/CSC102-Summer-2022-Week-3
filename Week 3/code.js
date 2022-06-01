//Blastoff timer from 50 to 0 in increments of 5. Requires 10 functions because timers need to overlap eachother in order to get increments in synch
function blastoffTimerV1(){
    console.log("blastoffTimerV1() started");
    var countdownTimer = 50;
    document.getElementById("countdownDisplay").innerHTML=countdownTimer;
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 5000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 15000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 20000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 25000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 30000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 35000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 40000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 45000);
    setTimeout(function(){
        countdownTimer = countdownTimer - 5;
        document.getElementById("countdownDisplay").innerHTML = "BLASTOFF";
    }, 50000);  
}


//begining of .js code for craps game
// Wins, losses, and Ties variables
var wins = 0;
var losses = 0;
var ties = 0;
function playCraps(){
    console.log ("playCraps() started");
// Dice variables
   var die1;
   var die2;
//math ceiling applied to random number 1-6. Applied to both dies to represent craps dice
   die1= Math.ceil(Math.random() * 6);
   die2= Math.ceil(Math.random() * 6);
    console.log("Die1 = " + die1);
    document.getElementById("die1Res").innerHTML = die1;
    console.log("Die2 = " + die2);
    document.getElementById("die2Res").innerHTML = die2;
//create sum from die 1 and die 2
    var sum = die1 + die2;
//see if sum is equal to 7 or 11 applying boolean input
    if(sum == 7 || sum == 11) {
        document.getElementById("crapsRes").innerHTML = "Craps, You Lose";
        losses++;
        document.getElementById("loseRes").innerHTML = losses;
        console.log ("Craps, You Lose"); 
//functions for winning with boolean input
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsRes").innerHTML = "YOU WIN!";
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        console.log ("YOU WIN!");
// functions for ties  
    } else {
        document.getElementById("crapsRes").innerHTML =  "Please Try Again";
        ties++;
        document.getElementById("tieRes").innerHTML = ties;
        console.log ("Ties");
    }
}