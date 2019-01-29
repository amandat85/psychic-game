// Variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var guessedLetters = []
var losses = 0
var wins = 0
var guessesLeft = 10
var random = []

//Set up random letter
window.onload = function() {
    var computerRandom = letters(Math.floor(Math.random() * letters.length));
    computerRandom.push(random);
}
console.log(computerRandom);


// Game Play
document.onkeyup = function keyPress(event) {
    var playerInput = event.key;
	guessedLetters.push(playerInput);

}
// Conditions
//If the player (playInput) guesses the randomly generated letter (random) and guesses (guessesLeft) are above 0
if ((playerInput === random) && (guessesLeft > 0)) {
    //var win goes up by 1
    wins++;
    //guessedLetters resets
    guessedLetter.length = 0;
    //guessesLeft resets
    guessedLetter.length = 0;
    //New letter generated randomly from array
    var computerRandom = letters(Math.floor(Math.random() * letters.length));
    computerRandom.push(random);
}

else if ((playInput !== random) && (guessesLeft > 0)) {
    //Then guessesLeft goes down by one
    guessesLeft=guessesLeft-1;
}

else {
    //loses increase
    losses ++;
    //guessedLetter is reset
    guessedLetter.length = 0;
    //guessesLeft resests
    guessesLeft=guessesLeft + 10;
    //game is reset and letter chosen from array
    var computerRandom = letters(Math.floor(Math.random() * letters.length));
    computerRandom.push(random);

}