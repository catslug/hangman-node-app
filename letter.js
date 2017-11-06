var Letter = function(obj) {
	this.letter = obj.letter;
	this.valid = function() {
		if (this.singleLetter()) {
			var valid = this.letter.match(/^[a-zA-Z]$/) !== null ? true : false;
			return valid;
		} 
	}
	this.singleLetter = function() {
		var single = this.letter.length = 1 ? true : false;
		return single;
	}
}

module.exports = Letter;