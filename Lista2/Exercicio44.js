let dados={
	nomes:['Guilherme','Evanildo','Victor','Lucas'],
	idades:[22,38,21,21],
	tamanho:4,
	funcao:'Armazenamento'
}
function howManyStrings(obj) {
	let countStrings=0;
	for (const prop in obj) {
		if (typeof obj[prop] == 'string') {
			countStrings++
		    }
	}
	return countStrings
}
console.log(`Há ${howManyStrings(dados)} strings no objeto enviado`);