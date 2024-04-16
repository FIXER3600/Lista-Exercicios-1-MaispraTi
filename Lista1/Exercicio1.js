const prompt = require("prompt-sync")();

let grausCelsius=Number(prompt("Digite a temperatura em graus Celsius:"));
const fahrenheit=(grausCelsius*1.8)+32
console.log(fahrenheit);
