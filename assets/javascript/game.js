var computerchoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var wins = 0;
var losses= 0;
var guesses= 10;
var guessesSoFar = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesText = document.getElementById("guesses-text");

document.onkeyup = function(event){

    var userGuess = event.key;
    var computerGuess = computerchoice[Math.floor(Math.random()* computerchoice.length)];

    console.log(computerGuess);
    

    if (userGuess !== computerGuess){
        guesses--;
    }
    if (userGuess == computerGuess){
         wins++;
         guesses = 10;
         guessesSoFar.length=0;
     }

       else if (guesses == 0){
         losses++;
         guesses = 10;
         guessesSoFar.length=0;
     }
     
     winsText.textContent = "Wins: " + wins;
     lossesText.textContent = "Losses: " + losses;
     guessesLeftText.textContent = "Guesses Left: " + guesses;
     guessesText.textContent = "Your Guesses so far: " + guessesSoFar;

     guessesSoFar.push(userGuess)

    }
    

