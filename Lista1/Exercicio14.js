const prompt = require("prompt-sync")();
let contador = 1;
let num;
let media = 0;
let soma = 0;
while (num != 0) {
  num = Number(prompt(`Digite o ${contador}º decimal:`));
  contador++;
  soma += num;
}
media = soma / (contador - 2);
console.log(`A média aritmética é: `+media.toFixed(2));
