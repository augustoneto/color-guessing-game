var targetIndex;
var target;
var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var guessInput;
var guessCount = 0;
var finished = false;

function doGame() {
	
	targetIndex = Math.floor((Math.random() * colors.length));
	console.log("Target index = " + targetIndex);
	target = colors[targetIndex];
	console.log("Target = " + target);
	
	while (!finished) {
		guessInput = prompt("I am thinking of one these colors:\n\n"
		+ colors + "\n\n"
		+ "What color am I thinking of?");
		console.log("Guess input = " + guessInput)
		
		guessCount++;
		console.log("Guess count = " + guessCount);
		
		finished = checkGuess(guessInput);

	}
		
}

function checkGuess(guess) {
	if (colors.indexOf(guess) < 0) {
		alert("Sorry, I don't recognize your color.\n\n"
			+ "Please try again.");
		return false;
	}
	
	if (guess > target) {
		alert("Sorry, your guess is not correct!\n\n"
			+ "hint: your color is alphabetically higher than mine.\n\n"
			+ "Please try again.");
		return false;
	}
	
	if (guess < target) {
		alert("Sorry, your guess is not correct!\n\n"
			+ "hint: your color is alphabetically lower than mine.\n\n"
			+ "Please try again.");
		return false;
	}
	
	changeBackgroundColor(target);
	
	alert("Congratulations! You have guessed the color!\n\n\n"
		+ "It took you " + guessCount + " to finish the game!\n\n\n"
		+ "You can see the colour in the background.")
	return true;
}

function changeBackgroundColor(color) {
	myBody = document.getElementsByTagName("body")[0];
	myBody.style.background = color;
}