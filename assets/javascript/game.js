//Variables

//Letter Array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Stats Variables
var wins = 0;
var losses = 0;
var guessedLetter= [];
var guessesLeft = 10;

//Reset/Game Start Function
function gameStart () {
    //Reset Variables and Display
    wins = 0;
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    losses = 0;
    document.getElementById("losses-text").innerHTML = "Losses: " + losses;
    guessedLetter= [];
    document.getElementById("left-text").innerHTML = "Guesses Left: " + guessesLeft;
    guessesLeft = 10;
    //Spacing
    document.getElementById("guessed-text").innerHTML = "Your Guessed Letters: " + guessedLetter + " ";
}

gameStart();

//Generate Random Letter
    var random = letters[Math.floor(Math.random() * letters.length)];
    console.log(random);

// Game Play
document.onkeyup = function(event) {

    var key = event.key.toLowerCase();
    console.log(key);

//User guessed letter gets pushed to array
    guessedLetter.push(key);
    console.log(guessedLetter);
    document.getElementById("guessed-text").innerHTML = "Your Guessed Letters: " + guessedLetter;

    //Conditions     
     //Right Guess
     if ((key === random) && (guessesLeft > 0)) {
        wins++;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        console.log(wins);
        //reset guessed letters array
        //randomLetter();  
    }    
    else if ((key !== random) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
        document.getElementById("left-text").innerHTML = "Guesses Left: " + guessesLeft;
        console.log(guessesLeft);
    }

    else if (guessesLeft === 0) {
        losses++;
        randomLetter();
        //gameStart();
    }
}

//Reset Variables for game
function resetVariables () {
    wins = 0;
    losses = 0;
    guessedLetter= [];
    guessesLeft = 10;
}

//Generate Random Letter function
function randomLetter() {
    var random = letters[Math.floor(Math.random() * letters.length)];
    console.log(random);
}
