// Variables

//Letter Array

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Variables to hold stats
var guessedLetter = [];
var losses = 0;
var wins = 0;
var guessesLeft = 10;

//Display user stats
document.getElementById("wins-text").innerHTML = "Wins: " + wins;
document.getElementById("losses-text").innerHTML = "Losses: " + losses;
document.getElementById("left-text").innerHTML = "Guesses Left: " + guessesLeft;
//Space between logged guessed letterrs is not working
document.getElementById("guessed-text").innerHTML = "Your Guessed Letters: " + guessedLetter + " ";

 //Set up random letter
var random = letters[Math.floor(Math.random() * letters.length)];
console.log(random);

// Game Play
document.onkeyup = function(event) {
    var key = event.key.toLowerCase();
    //console.log(key);

     //User guessed letter gets pushed to array
     guessedLetter.push(key);
     console.log(guessedLetter);

//Conditions     
     //Right Guess
     if (guessedLetter === random) {
        console.log(random);
        console.log(guessedLetter);
        //Win increase by one
        wins = wins + 1;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        console.log(wins);
         //Random array gets launched
        //var random = letters[Math.floor(Math.random() * letters.length)];
        //console.log(random);
   }

//Wrong guesses
   else if ((guessedLetter !== random) && (guessesLeft > 0)) {
        //Guesses left descreases by one
        guessesLeft = guessesLeft - 1;
        document.getElementById("left-text").innerHTML = "Guesses Left: " + guessesLeft;
        console.log(guessesLeft);
        //Guessed letters get logged for view
        document.getElementById("guessed-text").innerHTML = "Your Guessed Letters: " + guessedLetter;
        
    }
   
   else {
       losses++; 
       //reset
   }
}


// Conditions
//Wrong Guess (if) - greater than zero
    //guesses left descreases by one
    //Guessed letters get logged for view
    
//Right Guess still have guesses left (if else)
    //Win increase by one
    //Guesses left remains the same
    //Random array gets launched

//Game Over
    //Losses increase by 1
    //Guesses left gets reset
    //Game reset - random array gets launched

//Text Display
    //Wins
    //Losses
    //Guesses Left
    //Letters Guessed