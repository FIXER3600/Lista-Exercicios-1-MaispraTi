let dados={
	nomes:['Guilherme','Evanildo','Victor','Lucas'],
	idades:[22,38,21,21],
	tamanho:4,
	funcao:'Armazenamento'
}
function transformObject(obj,funct) {
	const newObject={}
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			newObject[prop]=funct(obj[prop])	
		}

	}
	return newObject
}
function doubleValue(value) {
	if (typeof value === 'number') {
	    return value * 2;
	}
	if (typeof value === 'string') {
		return value + value
	}
	if (typeof value === 'object') {
		
		for (let i = 0; i < value.length; i++) {
			value[i]*=2
			
		}
	}
	
	return value;
    }
console.log(transformObject(dados,doubleValue));