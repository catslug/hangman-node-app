var Guess = {
	possWords: ["maxine waters", "beyonce", "shirley chisolm", "octavia butler", "valkyrie", "nyota uhura", "gamora", 
		"michelle obama", "rosa parks", "serena williams", "malala", "storm", "misty knight"],
	random: function() {
		return Math.floor(Math.random() * this.possWords.length);
	},
	getAWord: function() {
		return this.possWords[this.random()] 
	}
}

module.exports = Guess;