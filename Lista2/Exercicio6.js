const prompt = require("prompt-sync")();
const randomNumber = Math.floor(Math.random() * 5) + 1;
let number
while (number != randomNumber) {
number=Number(prompt("Adivinhe o valor:"))
number == randomNumber ? console.log('Está certo! O valor sorteado é esse mesmo!') :
console.log("Tente novamente!");
}
