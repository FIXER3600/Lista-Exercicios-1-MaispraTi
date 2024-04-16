const prompt = require("prompt-sync")();
const numero1 = Number(prompt("Digite o primeiro numero:"));
const numero2 = Number(prompt("Digite o segundo numero:"));
if (numero1>numero2) {
	console.log(numero2,numero1);
}else{
	console.log(numero1,numero2);
}