const prompt = require("prompt-sync")();
const name = prompt("what is your name? ");
console.log("hello", name,"Welcome to the game" )

const ShouldWePlay = prompt("Do you  want to play  ")

const condition = ShouldWePlay.toLowerCase() === "yes"
console.log(condition)