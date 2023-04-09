// Generate a random secret number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

// Add event listener to submit button
document.getElementById("submit").addEventListener("click", function() {
	// Get user's guess
	const guess = parseInt(document.getElementById("guess").value);

	// Check if guess is correct
	if (guess === secretNumber) {
		guessCount++;
		document.getElementById("message").innerHTML = `Congratulations! You guessed the number in ${guessCount} attempts.`;
		document.getElementById("guess").disabled = true;
		document.getElementById("submit").disabled = true;
	} else if (guess < secretNumber) {
		guessCount++;
		document.getElementById("message").innerHTML = `Your guess is too low. Guess count: ${guessCount}.`;
	} else {
		guessCount++;
		document.getElementById("message").innerHTML = `Your guess is too high. Guess count: ${guessCount}.`;
	}
});
