function compactVector(vet) {
	let vetB = [];
	let i = 0;
    
	while (i < vet.length) {
	    if (vet[i] === null || vet[i] < 0) {
		vetB.push(vet[i]);
		vet.splice(i, 1); 
	    } else {
		i++;
	    }
	}
    
	return `O vetor original ficou: ${vet}\nO vetor B ficou: ${vetB}`;
    }
    
    console.log(compactVector([-1, 0, 1, 2, 3, 6, -6]));