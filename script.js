

var rPS = ["R","P","S"];
var playerWins = 0;
var computerWins = 0;
var tie = 0;

function rockPaperScissors(){
for (var i = 0; i < 10; i++) {
        var choice = prompt("Enter R, P or S");
        choice = choice.toUpperCase()
        var computerChoice = rPS [Math.floor(Math.random()*rPS.length)];
    if (choice == computerChoice) {
        tie++;
        alert("Draw - " + "Computer also chose " + computerChoice)
    } else if (choice == "R" && computerChoice == "P") {
        computerWins++;
        alert("Computer wins - " + "Computer chose " + computerChoice)
    } else if (choice == "R" && computerChoice == "S") {
        playerWins++;
        alert("You win - " + "Computer chose " + computerChoice)
    } else if (choice == "S" && computerChoice == "P") {
        playerWins++;
        alert("You win - " + "Computer chose " + computerChoice)
    } else if (choice == "S" && computerChoice == "R") {
        computerWins++;
        alert("Computer wins - " + "Computer chose " + computerChoice)
    } else if (choice == "P" && computerChoice == "R") {
        playerWins++;
        alert("You win - " + "Computer chose " + computerChoice)
    } else if (choice == "P" && computerChoice == "S") {
        computerWins++;
        alert("Computer wins - " + "Computer chose " + computerChoice) 
    } else {
        alert("Go back and do it properly")
    }
}

    if (playerWins > computerWins) {
        alert("You won the game")
    } else if (computerWins > playerWins) {
        alert("Computer won the game")
    } else if (computerWins == playerWins) {
        alert("Nobody won :(")
    }
}