var Player = function() {
	this.wins = 0;
	this.losses = 0;
	this.guessesLeft = 7;
	this.incrementWins = function() {
		this.wins++;
	}
	this.incrementLosses = function() {
		this.losses++;
	}
	this.decrementGuesses = function() {
		this.guessesLeft--;
	}
}

module.exports = Player;