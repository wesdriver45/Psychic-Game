


//display letter user chose, a list of 9 guesses


//use an alphabet array
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




//reset game at end

var wins = 0;
var losses= 0;
var guessesLeft = 9;
var guessesMade = [];

//user chooses a letter - use  var userguess = String.fromCharCode(event.keyCode).toLowerCase();
document.onkeyup = function(event) {

	//var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var userGuess = event.key;
	//display guesses so far
	guessesMade.push(userGuess);

	console.log(userGuess);

	//get the game to choose a random letter
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	console.log(computerGuess);

	//count of guesses left	,tally and display my wins, tally and display my losses
	
	
	if (userGuess === computerGuess) {
		wins++;
		guessesLeft = 9;
		guessesMade = [];

	}
	else {
		guessesLeft--;
	}
		
	if (guessesLeft === 0) {
		losses++;
		guessesLeft = 9;
		guessesMade = [];
	}	
	
	var html = "<p>Can you guess what letter I'm thinking of???</p><br>" +
			   "<p>Wins: " + wins + "</p><br>" +
			   "<p>Losses: " + losses + "</p><br>" +
 			   "<p>Guesses Left: " + guessesLeft + "</p><br>" +
 			   "<P>Your guesses so far: " + guessesMade + "</p><br>" 
 			   

	document.querySelector("#game").innerHTML = html;
};