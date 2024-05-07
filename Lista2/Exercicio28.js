const M=[[1, 2, 3, 4, 5, 6,7,8,9,10],
	[7, 8, 9, 10, 11, 12,13,14,15,16],
	[13, 14, 15, 16, 17, 18,19,20,21,22],
	[19, 20, 21, 22, 23, 24,25,26,27,28],
	[25, 26, 27, 28, 29, 30,31,32,33,34],
	[31, 32, 33, 34, 35, 36,37,38,39,40]
    ];

//Item a)

function sumElementsAboveMainDiagonal(matriz) {
	const linhas=matriz.length
	let soma =0;
	
	for (let i = 0; i < linhas; i++) {
		for (let j = i + 1; j < linhas; j++) {
		    soma += matriz[i][j];
		}
	    }
	return soma

}
console.log(sumElementsAboveMainDiagonal(M));
//Item b)
function sumElementsBelowMainDiagonal(matriz) {
	const linhas=matriz.length
	let soma =0;
	
	for (let i = 0; i < linhas; i++) {
		for (let j =0; j < linhas; j++) {
		    soma += matriz[i][j];
		}
	    }
	return soma

}
console.log(sumElementsBelowMainDiagonal(M));