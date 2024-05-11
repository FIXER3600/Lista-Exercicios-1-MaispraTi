const strings=["a",'b','gg','a','b']
function makeObjectStrings(array) {
	let newObject={}
	const ocorrencias = {};
	for (const elemento of array) {
		if (ocorrencias[elemento]) {
		    ocorrencias[elemento]++;
		} else {
		    ocorrencias[elemento] = 1;
		}
		
		newObject.elemento=ocorrencias
	    }
	return newObject
}
console.log(makeObjectStrings(strings));