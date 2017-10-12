


//display letter user chose, a list of 9 guesses


//use an alphabet array
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];




//display guesses so far
//reset game at end

var wins = 0;
var losses= 0;
var guessesLeft = 9;
var guessesMade = 0;


//user chooses a letter - use  var userguess = String.fromCharCode(event.keyCode).toLowerCase();
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

	document.getElementById("guessSoFar").textContent = userGuess;

	var userGuess = event.key;
//get the game to choose a random letter
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		console.log(computerGuess);

//display letter comp chose

	// if (userGuess != computerChoices) {
	// 	alert("Please choose a letter from the alphabet. You wasted a guess!");
	// }


	//count of guesses left	
	if (guessesLeft != 0) {
		guessesLeft --;
	}

	//tally and display my wins
	if (userGuess === computerGuess) {
		wins++;

		}

	//tally and display my losses
	if (userGuess != computerGuess) {
			losses++;
		}

	//if (guessesMade)




	var html = "<p>Can you guess what letter I'm thinking of???</p>" +
			   "<p>Wins: " + wins + "</p>" +
			   "<p>Losses: " + losses + "</p>" +
 			   "<p>Guesses Left: " + guessesLeft + "</p>";
 			   "<p>Your Guesses so far: " + userGuess + "</p>";

	document.querySelector("#game").innerHTML = html;
};