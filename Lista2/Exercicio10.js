const prompt = require("prompt-sync")();
let opt = 1;
let count = 1;
let array = [];
let sum = 0;
let minor = 0;
let media = 0;
let qtdPairValues = 0;
function newNumber(count) {
  let number = Number(prompt(`Digite o ${count}º valor: `));
  return number;
}
do {
	array.push(newNumber(count));
	count++;
      
	let validOption = false;
	while (!validOption) {
	  opt = Number(prompt(" 1 - Continuar \n 0 - Parar: "));
	  if (opt === 1 || opt === 0) {
	    validOption = true;
	  } else {
	    console.log("Opção inválida, digite novamente");
	  }
	}
      
	if (opt === 0) {
	  console.log("Fim do programa");
	}
      } while (opt !== 0);
sum = array.reduce((acc, act) => acc + act);
minor = Math.min(...array);
media = sum / array.length;
qtdPairValues = array.filter((value) => value % 2 == 0).length;
console.log("A soma dos valores digitados é ", sum);
console.log("O menor dos valores digitados é ", minor);
console.log("A média dos valores digitados é ", media.toFixed(2));
console.log(
  "A quantidade de valores pares dos valores digitados é ",
  qtdPairValues
);
