const prompt = require("prompt-sync")();
let vetPair=[]
let vetOdd=[]
function showVetorPairsOdd() {
	let countVetPair=0
	let countVetOdd=0

	for (let i = 0; i < 30; i++) {
		const value=Number(prompt(`Digite o ${i}º valor:`));
		if (value % 2 === 0)  {
			if (countVetPair<5) {
				vetPair.push(value)
				countVetPair++
			}else {
				console.log("Vetor de números pares está cheio!");
				console.log(vetPair);
				countVetPair=0
				vetPair=[]
				
			}
			
		}else{
			if (countVetOdd<5) {
				vetOdd.push(value)
				countVetOdd++
			}else {
				console.log("Vetor de números impares está cheio!");
				console.log(vetOdd);
				countVetOdd=0
				vetOdd=[]
			}
		}
		
	}
}
showVetorPairsOdd()
