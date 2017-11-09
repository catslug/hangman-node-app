var Guess = require("./guess.js");
var Letter = require("./letter.js");
var Player = require("./player.js");
var cowsay = require("cowsay");
var thisWord
var letter
var player

var CurrentWord = function(obj) {
	this.needANewWord = false;
	this.needANewPlayer = true;
	this.userGuess = obj.userGuess; 
	this.guessesArr = []; // all of the possible letters guessed by the user
	this.currentWordArr = []; // the array containing the current word 
	this.userSeenArr = []; // the visible array displaying letters revealed or underscores to user
	this.start = function() {
		if (this.needANewPlayer) {
			player = new Player({});
			this.needANewPlayer = false;
		}
		this.needANewWord = false;
		this.guessesArr = [];
		this.currentWordArr = [];
		this.userSeenArr = [];
		thisWord = Guess.getAWord(); 
		this.underScoreIt(thisWord, this.currentWordArr, this.userSeenArr);
		this.print();
		return thisWord;
	}
	this.underScoreIt = function(val, arr1, arr2) {
		for (var i = 0; i < val.length	; i++) {
			arr1.push(val[i]);
			var areThereSpaces = arr1[i] !== " " ? arr2.push("_") : arr2.push(" ");
		}
	}
	this.print = function() {
		console.log("Wins: " + player.wins + "\nLosses: " + player.losses + 
			"\nGuesses Left: " + player.guessesLeft + 
			"\nYour guesses so far: " + this.guessesArr.join(" ") + 
			"\nHere's your word to guess: " + this.userSeenArr.join(" "));
	}
	this.didYouWin = function() {
		var isStillGuessing = this.userSeenArr.includes("_") ? true : false;
		if (!isStillGuessing && player.guessesLeft > 0) {
			player.incrementWins();
			console.log(cowsay.say({ 
				text: "You won! The answer was " + this.currentWordArr.join("") + ".", 
				e: "OO", 
				T: "U"  
			}));
			this.needANewWord = true;
		} else if (isStillGuessing && player.guessesLeft === 0) {
			player.incrementLosses();
			console.log(cowsay.say({ 
				text: "You lost! The answer was " + this.currentWordArr.join("") + ".", 
				e: "oO", 
				T: "U" 
			}));
			this.needANewWord = true;
		}
	}
	this.isUserGuessValid = function() {
		letter = new Letter({ letter: this.userGuess });
		if (letter.valid() && !this.guessesArr.includes(this.userGuess)) {
			this.guessesArr.push(this.userGuess);
			this.popLetters(this.userGuess);
			this.didYouWin();
		} else {
			console.log(cowsay.say({ 
				text: "Please choose a single, valid letter, and make sure it is one you have not already chosen.", 
				e: "Oo", 
				t: "U" 
			}))
		}
	}
	this.popLetters = function(val) {
		for (var i = 0; i < this.currentWordArr.length; i++) {
			if (this.currentWordArr[i] === val) {
				this.userSeenArr.splice(i, 1, val);
			} 
		}
		if (!this.currentWordArr.includes(val)) {
			player.decrementGuesses();
		}
	}
} 

module.exports = CurrentWord; 