# hangman-node-app
command line node app featuring a familiar game of hangman

## User Story
  * On start the CLI app asks the user if they'd like to play a game of hangman. Upon confirm, the player constructor is initiated and a new game starts. 
  * Words are selected at random from an array of options featuring bad ass women of color, both fictional and non.
  * Only single, valid letters are accepted. If the key you select is not a letter from a-z or A-Z, or if it is multiple letters, you'll see a warning. 
  * After each round, the game asks for confirmation that you would like to guess another word.
  * The logic ensures you won't be given the same word twice and alerts you that the game is over when all of the words have been guessed.
  * Wins and losses are accumulated; guesses left decrement from 7 and are reset after each round.
  * When the game has an important message to tell you, an ASCII cow communicates the text through a speech bubble. He'll say such things as "you won!", "you lost!", or "you need to choose a single valid letter, and make sure it's one you haven't already chosen!". 
  
## Logic
  * The game operates from five main files.
    * Main.js manages user interactions, the Inquirer package, and initiates a new CurrentWord constructor from Word.js.
    * Word.js manages most of the game logic. It initiates a new player from the Player constructor in Player.js, receives the user's letter guess, calls a new word from the array stored in a Guess constructor in Guess.js, splits the word into a visible array for the user (think underscores and letters), and compares the guess against the current word's array.
    * Player.js manages user stats. Upon initiation, it sets user wins and losses to 0, and guesses left to 7. The Player constructor contains methods to increment wins, increment losses, and decrement guesses. 
    * Letter.js manages validation. The Letter constructor receives the current user guess and validates that it is both a single character and a valid letter.
    * Guess.js manages current word selection. It houses the array of possible words and hosts methods to randomize their selection and register when the array is empty, thus signaling an end to the game.
  
## Technologies Used
  * Javascript
  * Node.js
  * Inquirer (NPM package)
  * Cowsay (NPM package) 
