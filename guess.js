var Guess = {
	possWords: ["maxine waters", "audre lorde", "sylvia rivera", "harriet tubman", "coretta scott king", "marsha p johnson", 
	"beyonce", "shirley chisolm", "octavia butler", "valkyrie", "nyota uhura", "gamora", "michelle obama", "rosa parks", 
	"serena williams", "malala", "storm", "misty knight", "amanda waller", "bumblebee", "maya angelou", "laverne cox"],
	isAtTheEnd: function() {
		var endOfTheArray = this.possWords.length < 1 ? true : false;
		return endOfTheArray;
	},
	random: function() {
		return Math.floor(Math.random() * this.possWords.length);
	},
	getAWord: function() {
		var newWord = !this.possWords.length < 1 ? this.possWords[this.random()] : false;
		this.possWords.splice(this.possWords.indexOf(newWord), 1);
		return newWord; 
	}
}

module.exports = Guess;