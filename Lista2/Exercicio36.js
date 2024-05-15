const prompt = require("prompt-sync")();
let vetBet=[1,2,3,4,5,6,7,8,9,10,11,12,13]
function showLoteryResult() {
	let punters=[]
	let result;
	const winners = [];
	for (let i = 1; i < 100; i++) {
		prompt(`${i}º apostador`)
		const numCard=Number(prompt(`Digite o número do cartão: `));
		const input = prompt("Insira os números da aposta separados por vírgula (por exemplo: 1,2,3): ");
		const bet= input.split(",").map(Number)
		punters.push({numCard:numCard,bet:bet})
		

	}

	for (let i = 0; i < punters.length; i++) {
		if (JSON.stringify(punters[i].bet) === JSON.stringify(vetBet)) {
		   result=`O jogador de cartão ${punters[i].numCard} foi o vencedor!`;
		   winners.push(punters[i].numCard);
		}
	    }
	
	    if (winners.length > 0) {
		result=`Os jogadores de cartão ${winners.join(", ")} foram os vencedores!`;
	    } else {
		result=`Não houve vencedores. O resultado era: ${vetBet.join(", ")}`;
	    }
	return result
}
console.log(showLoteryResult())

