const prompt = require("prompt-sync")();
let numero = 0;
while ( numero>=0) {
	numero=Number(prompt("Digite um número inteiro:"))
	
	if (numero<0 || numero=='') {
		break
	}
	console.log(`${numero % 2 == 0?'PAR':"IMPAR"}`);
}
