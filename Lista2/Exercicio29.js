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
console.log(sumLineFour(M));
