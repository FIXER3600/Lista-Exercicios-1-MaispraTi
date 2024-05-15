let dados={
	nomes:['Guilherme','Evanildo','Victor','Lucas'],
	idades:[22,38,21,21],
	tamanho:4,
	funcao:'Armazenamento'
}
function transformObject(obj) {
	const newObject = {};
	for (const prop in obj) {
		if (Array.isArray(obj[prop])) {
			newObject[prop] = obj[prop];
		    }
	}
	return newObject
}
console.log(transformObject(dados));