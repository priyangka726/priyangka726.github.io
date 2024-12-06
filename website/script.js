let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = document.getElementById('guess-input').value;
  const result = document.getElementById('result');

  if (userGuess == randomNumber) {
    result.textContent = 'Congratulations! You guessed the number!';
  } else if (userGuess > randomNumber) {
    result.textContent = 'Too high! Try again.';
  } else {
    result.textContent = 'Too low! Try again.';
  }
}
