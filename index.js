const prompt = require("prompt-sync")();
const name = prompt("what is your name? ");
console.log("hello", name,"Welcome to the game" )

const ShouldWePlay = prompt("Do you  want to play  ")

if (ShouldWePlay.toLowerCase() === "yes" || yes === "yeah") {
    const lang = prompt("Between USA and China which country have more population ")
    if (lang.toLowerCase() === "usa") {
        console.log("You are Wrong")
}
        else if (lang.toLowerCase() === "china"){
            console.log("Correct")
        }
}
else if (ShouldWePlay.toLowerCase() === "no" || no === "nah"){
    console.log("You missed the game")
}
else{
    console.log("Invalid input")
}