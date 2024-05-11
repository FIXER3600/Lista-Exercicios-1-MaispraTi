const obj1={
	nomes:['Guilherme','Evanildo','Victor','Lucas'],
	idades:[22,38,21,21],
	tamanho:4,
	funcao:'Armazenamento'
}
const obj2={
	frases:['E conhecereis a verdade e a verdade vos libertará.','Pai, perdoa-lhes, porque não sabem o que fazem.','Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá; e quem vive e crê em mim nunca morrerá.','De que serve ao homem conquistar o mundo inteiro se perder a alma?'],
	autor:'Jesus Cristo'
}
function concatObjects(obj1,obj2) {
	let newObject={ ...obj1, ...obj2 };
	    return newObject;
}
console.log(concatObjects(obj1,obj2));