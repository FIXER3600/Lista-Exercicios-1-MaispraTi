const M = [
	[1, 2, 3, 4, 5],
	[7, 8, 9, 10, 11],
	[13, 14, 15, 16, 17],
	[19, 20, 21, 22, 23],
	[25, 26, 27, 28, 29],
	
    ];
//Item a)
function sumLineFour(m) {
	const lineFour=m[3]
	return lineFour.reduce((acc,act)=>acc+act)
	
}
//console.log(sumLineFour(M));
//Item b)
function sumLineTwo(m) {
	const lineFour=m[1]
	return lineFour.reduce((acc,act)=>acc+act)
	
}
//console.log(sumLineTwo(M));
//Item c)
function sumMainDiagonal(m) {
	const mainDiagonal=m.map((linha,i)=>linha[i])
	return mainDiagonal.reduce((acc,act)=>acc+act)

	
}
//console.log(sumMainDiagonal(M));
//Item d)
function sumAllElements(m) {
	let sum=0
	for (let i = 0; i < m[0].length; i++) {
		for (let j = 0; j < m.length; j++) {
			sum+=m[i][j]
		}
	}
	return sum
}
console.log(sumAllElements(M));