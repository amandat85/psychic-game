// Variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Test Array
console.log(letters);

var guessedLetter = [];
console.log(guessedLetter)
var losses = 0;
var wins = 0;
var guessesLeft = 9;

//Set up random letter
var random = letters[Math.floor(Math.random() * letters.length)];
//Test Random letter
console.log(random);

// Game Play
document.onkeyup = function(event) {
    key = event.key.toLowerCase();
    console.log(key);
    //not in scope?
    var guessedLetter = [];
    guessedLetter.push(key);
    console.log(guessedLetter);
    //return guessedLetter;
}


// Conditions
//If the player guesses the randomly generated letter (random) and guesses (guessesLeft) are above 0


if (("guessedLetter" === random) && (guessesLeft > 0)) {
    //var win goes up by 1
    wins++;
    console.log(wins);
    //guessedLetters resets
    guessedLetter.length = 0;
    //guessesLeft resets
    guessedLeft.length = 9;
    //New letter generated randomly from array
    var random = letters(Math.floor(Math.random() * letters.length));
}

else if (("guessedLetter" !== random) && (guessesLeft > 0)) {
    //Then guessesLeft goes down by one
    guessesLeft=guessesLeft-1;
}

else {
    //losses increase
    losses ++;
    //guessedLetter is reset
    guessedLetter.length = 0;
    //guessesLeft resests
    guessesLeft=guessesLeft + 10;
    //game is reset and letter chosen from array
    var random = letters(Math.floor(Math.random() * letters.length));
    random.push(random);
}
