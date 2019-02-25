

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var soFar = 0;
    var guessesMade = [];
    var directionsText = document.getElementById("directions-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var computerChoiceText = document.getElementById("computerchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesleft-text");
    var soFarText = document.getElementById("myguesses-text")

        function reset() {
            guessesLeft = 10;
            soFar = 0;
            guessesMade = []; 
        }

        document.onkeyup = function(event) {
            console.log(event)
        var userGuess = event.key;

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            
        
        if (guessesLeft === 0){
                losses++;
                reset();
            }
            else if (userGuess == computerGuess){
                wins++;
                reset()
            }
            else
            {
                guessesMade.push(" " + userGuess)
                guessesLeft--;
            }


            directionsText.textContent = "";

            document.getElementById("userchoice-text").textContent = "You chose: " + userGuess;
            document.getElementById("computerchoice-text").textContent = "The computer chose: " + computerGuess;
            document.getElementById("wins-text").textContent = "wins: " + wins;
            document.getElementById("losses-text").textContent = "losses: " + losses;
            document.getElementById("guessesleft-text").textContent = "Guesses remaining: " + guessesLeft;
            document.getElementById("myguesses-text").textContent = "Guessed letters: " + guessesMade
        
        };
