const prompt = require("prompt-sync")();
let a = Number(prompt("Digite o comprimento da primeira reta:"));
let b = Number(prompt("Digite o comprimento da segunda reta:"));
let c = Number(prompt("Digite o comprimento da terceira reta:"));
let message=''
if (a<b+c && b<a+c && c<a+b) {
	message='É possível formar um triângulo pelos comprimentos fornecidos.'
}else{
	message='Pelos lados fornecidos, não se forma um triângulo válido'
}
console.log(message);