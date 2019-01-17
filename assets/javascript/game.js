// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

// 3. Guess what letter I'm thinking of

// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


// Randomly generate a letter

//Listen for keystroke (lowercase)

//display keystroke

//if keystroke matches, record win and reset

// if keystroke does not match, reduce guess number until they're gone

//once they're gone, record loss and reset

console.log("Hello!!")

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var gleft = 9;
var guesses = [];

var winsTarget = document.getElementById("wins");
var lossesTarget = document.getElementById("losses");
var gleftTarget = document.getElementById("gleft");
var guessesTarget = document.getElementById("guesses");

document.onkeyup = function(event) {


    
    // Determines which key was pressed.
var userInput = event.key; 

guesses.push(userInput);


    // Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
if (guesses === computerGuess) {
      wins++;
       
    }
if (userInput !== computerGuess){gleft--};
   

if (gleft === 0){losses++; gleft = 9}



console.log(losses)
   

      

// Display the user and computer guesses, and wins/losses/ties.

    winsTarget.textContent = "wins: " + wins;
    lossesTarget.textContent = "losses: " + losses;
    gleftTarget.textContent = "Guesses left: " + gleft;
    guessesTarget.textContent = "Your guesses so far: " + guesses;
    
}