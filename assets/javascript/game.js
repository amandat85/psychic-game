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
    document.getElementById("guessed-text").innerHTML = "Your Guessed Letters: " + guessedLetter + " ";
    guessesLeft = 10;
    document.getElementById("left-text").innerHTML = "Guesses Left: " + guessesLeft;
}

function guessesLeftReset() {
    guessesLeft = 10;
    document.getElementById("left-text").innerHTML = "Guesses Left: " + guessesLeft;
}

gameStart();
randomLetter();

// Game Play
document.onkeyup = function(event) {

    var key = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(key);

//User guessed letter gets pushed to array
    guessedLetter.push(" " + " " + key);
    console.log(guessedLetter);
    document.getElementById("guessed-text").innerHTML = "Your Guessed Letters: " + guessedLetter;

    //Conditions     
    //Right Guess
     if ((key === random) && (guessesLeft > 0)) {
        wins++; //wins not increasing
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        console.log(wins);
        //Clear guessed letters
        for (var i = 0; i = guessedLetter.length;  i--) {
            guessedLetter.pop();
        }
        document.getElementById("guessed-text").innerHTML = "Your Guessed Letters: " + guessedLetter;
        //Choose random letter
        randomLetter();  
    }    
    //Wrong Guess
    else if ((key !== random) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft - 1;
        document.getElementById("left-text").innerHTML = "Guesses Left: " + guessesLeft;
        console.log(guessesLeft);
    }
    //Out of Guesses
    else {
        losses++; 
        document.getElementById("losses-text").innerHTML = "Losses: " + losses;
         //Clear guessed letters
         for (var i = guessedLetter.length; i > 0; i--) {
            guessedLetter.pop();  
        } 
        document.getElementById("guessed-text").innerHTML = "Your Guessed Letters: " + guessedLetter;
       //Reset Guesses Left
        guessesLeftReset ();
        //Choose random letter
        randomLetter();
    }
}

//Generate Random Letter function
function randomLetter() {
    random = letters[Math.floor(Math.random() * letters.length)];
    console.log(random);
}
