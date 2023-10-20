console.log (computerChoice);

var rPS = ["r","p","s"];
var playerWins = 0;
var computerWins = 0;
var tie = 0;

function rockPaperScissors(){
for (var i = 0; i < 10; i++) {
        var choice = prompt("Enter r, p or s");
        choice = choice.toLowerCase()
        var computerChoice = rPS [Math.floor(Math.random()*rPS.length)];
    if (choice == computerChoice) {
        tie++;
        alert("Draw - " + "Computer also chose " + computerChoice)
    } else if (choice == "r" && computerChoice == "p") {
        computerWins++;
        alert("Computer wins - " + "Computer chose " + computerChoice)
    } else if (choice == "r" && computerChoice == "s") {
        playerWins++;
        alert("You win - " + "Computer chose " + computerChoice)
    } else if (choice == "s" && computerChoice == "p") {
        playerWins++;
        alert("You win - " + "Computer chose " + computerChoice)
    } else if (choice == "s" && computerChoice == "r") {
        computerWins++;
        alert("Computer wins - " + "Computer chose " + computerChoice)
    } else if (choice == "p" && computerChoice == "r") {
        playerWins++;
        alert("You win - " + "Computer chose " + computerChoice)
    } else if (choice == "p" && computerChoice == "s") {
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
