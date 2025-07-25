const prompt = require("prompt-sync")();
const name = prompt("what is your name? ");
console.log("hello", name,"Welcome to the game" )

const ShouldWePlay = prompt("Do you  want to play  ")

if (ShouldWePlay.toLowerCase() === "yes") {
    console.log("Thanks we will play")
}
else if (ShouldWePlay.toLowerCase() === "no"){
    console.log("You missed the game")
}
else{
    console.log("Invalid input")
}