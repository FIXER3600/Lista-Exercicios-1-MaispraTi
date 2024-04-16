const prompt = require("prompt-sync")();
let qtdMacas=Number(prompt("Digite o número de maçãs:"))
let total;
if (qtdMacas<12) {
	total=qtdMacas*0.30
}else{
	total=qtdMacas*0.25
}
console.log(total);