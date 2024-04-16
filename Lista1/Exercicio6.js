const prompt = require("prompt-sync")();
let a = Number(prompt("Digite o lado a do triângulo:"));
let b = Number(prompt("Digite o lado b do triângulo:"));
let c = Number(prompt("Digite o lado c do triângulo:"));
let message;
if (a<b+c && b<a+c && c<a+b) {
	if(a==b && b==c){
		message='Triângulo Equilátero'
	}
	else if(a != b && b != c && a != c){
		message='Triângulo Escaleno'
	}
	else{
		message='Triângulo Isósceles'
	}
}else{
	message='Pelos lados fornecidos, não se forma um triângulo válido'
}


console.log(message);