const prompt = require("prompt-sync")();

function readResults() {
	const template = prompt("Digite o resultado oficial da Loto: ");
	return template.split(","); 
    }
    function readBets() {	
	const input=prompt("Digite suas apostas separadas por vírgula (por exemplo: 1,5,4): ")
	return  input.split(",")
}
function arraysAreEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
	    return false;
	}
	for (let i = 0; i < arr1.length; i++) {
	    if (arr1[i] !== arr2[i]) {
		return false;
	    }
	}
	return true;
    }
    
function calcResultsLoto() {
	const oficialResult=readResults()
	let winners = 0;
	let result
	for (let i = 1; i < 51; i++) {
		console.log(`Apostador ${i}`);
		const bets=readBets()
	
		if (arraysAreEqual(bets, oficialResult)) {
			result = "Ganhador";
			winners++;
		    }
			 
			 }
			
			 if (winners > 0) {
			     result=`Houveram ${winners} vencedores!`;
			 } else {
			     result=`Não houve vencedores. O resultado era: ${oficialResult}`;
			 }	
			return result
	}
	
console.log(calcResultsLoto());