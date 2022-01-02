const guessingGame = (guess) => {
  const answer = Math.floor(Math.random()*100)
  let guesses = 0;
  let gameOver = false;
  return function guess(guess){
    if(gameOver) {
      return 'The game is over, you already won'
    } else if(guess > answer) {
      guesses ++;
      return `${guess} is too high!`
    } else if(guess < answer) {
      guesses ++;
      return `${guess} is too low!`
    } else if(guess === answer) {
      guesses ++;
      gameOver = true;
      return `You win! You found ${answer} in ${guesses} guesses`
    }
  }
}

module.exports = guessingGame;