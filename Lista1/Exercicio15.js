const prompt = require("prompt-sync")();
let contador = 1;
let num;
let media = 0;
let peso;
let soma = 0;
let somaPesos=0
while (num != 0) {
  num = Number(prompt(`Digite o ${contador}º decimal:`));
  if (num==0) {
	break
  }
  peso=Number(prompt(`Digite o peso do ${contador}º valor:`))
  contador++;
  somaPesos+=peso
  soma += num*peso;
}
media = soma /somaPesos;
console.log(`${!isNaN(media)?`A média ponderada é: ${media.toFixed(2)}`:"Fim do programa"}`);
