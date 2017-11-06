var inquirer = require("inquirer");
var fs = require("fs");
var CurrentWord = require("./word.js");
var hangman = require("hangman-ascii");
var cowsay = require("cowsay");

// initializing variables
var wins = 0;
var losses = 0;
// var hangmanLevel = 0;

inquirer.prompt([
	{
		type: "confirm",
		message: "Do you want to play a round of hangman?",
		name: "confirm"
	}
	]).then(function(answers) {
		if (answers.confirm) {
			word = new CurrentWord({ 
				wins: wins,
				losses: losses,
			});
			word.start();
			word.print();
			askForUserGuess();
		} else {
			return console.log(cowsay.say({ text: "That's okay! Let me know if you change your mind.", e: "OO", t: "U" }))
		}
	})

function askForUserGuess() {
	// hangman.drawLevel(hangmanLevel, "cyan");
	// hangmanLevel++;

	inquirer.prompt([
	{
		type: "input",
		message: "What's your guess?",
		name: "userGuess"
	}
		]).then(function(answers) {
			word.userGuess = answers.userGuess.toLowerCase();
			word.isUserGuessValid();
			word.print();

			if (!word.needANewWord) {
				// hangman.drawLevel(hangmanLevel, "cyan");
				askForUserGuess();
			} else if (word.needANewWord) {
				inquirer.prompt([
					{
						type: "confirm",
						message: "Would you like to guess another word?",
						name: "playAgain"
					}
					]).then(function(answers) {
						if (answers.playAgain) {
							word.start();
							word.print();
							askForUserGuess();
						} else {
							console.log(cowsay.say({ text: "That's m-ooo-kay! Come back again!", e: "v v", t: "U" }));
						}
					})
				}
			}
		)
}