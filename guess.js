var Guess = {
	possWords: ["maxine waters", "beyonce", "shirley chisolm", "octavia butler", "valkyrie", "nyota uhura", "gamora", 
		"michelle obama", "rosa parks", "serena williams", "malala", "storm", "misty knight"],
	isAtTheEnd: function() {
		var endOfTheArray = this.possWords.length < 0 ? false : true;
		return endOfTheArray;
	},
	random: function() {
		return Math.floor(Math.random() * this.possWords.length);
	},
	getAWord: function() {
		// slice it from the array here
		return this.possWords[this.random()] 
	}
}

module.exports = Guess;