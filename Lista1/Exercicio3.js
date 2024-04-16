const prompt = require("prompt-sync")();
let numero1 = Number(prompt("Digite o primeiro numero inteiro:"));
let numero2 = Number(prompt("Digite o segundo numero inteiro:"));
let numero3 = Number(prompt("Digite o terceiro numero inteiro:"));
let numero4 = Number(prompt("Digite o quarto numero inteiro:"));

numero4=numero1+numero2+numero3
numero1 += 25;
numero2 *= 3;
numero3=(12/100)*numero3

console.log(`Soma 25 ao primeiro=${numero1}\nTriplo do segundo=${numero2}\n12% do valor do terceiro=${numero3}\nSoma de três primeiros originais=${numero4}`);