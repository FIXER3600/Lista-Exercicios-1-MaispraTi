const prompt = require("prompt-sync")();

function operationVector() {
	let vet=[]
	
	for (let i = 0; i < 6; i++) {
		const elemento = Number(prompt(`Digite o ${i + 1}º elemento: `));
		vet.push(elemento);		
	}
		opt=Number(prompt("Digite o que deseja fazer agora: \n1- soma dos elementos;\n2- produto dos elementos;\n3- média dos elementos;\n4- ordene os elementos em ordem crescente;\n5- mostre o vetor."))
		switch (opt) {
			case 1:
				const sum=vet.reduce((acc,act)=>acc+act)
				console.log(`A soma dos elementos: ${sum}`);
				break
				
			case 2:
				const product = vet.reduce((acc, curr) => acc * curr, 1);
				console.log(`Produto dos elementos: ${product}`);
				break;
			case 3:
				const media=vet.reduce((acc, curr) => acc + curr, 0) / vetor.length;
				console.log(`Média dos elementos: ${media}`);
				break
					
			case 4:
				vet.sort((a, b) => a - b);
				console.log("Elementos ordenados em ordem crescente:");
				console.log(vet);
				break;
			default:
				console.log("Operação inválida.");
				break;
		}
}
console.log(operationVector())

