const C=[]
const M = [
	[1, -2, 3, -4, 5, -6, 7, -8],
	[-1, 2, -3, 4, -5, 6, -7, 8],
	[1, 2, 3, -4, -5, -6, 7, 8],
	[1, -2, 3, 4, 5, 6, -7, -8],
	[-1, -2, -3, -4, -5, -6, -7, -8],
	[1, 2, 3, 4, 5, 6, 7, 8],
      ];
for (let i = 0; i < M.length; i++) {
	let countNegativos = 0;
	for (let j = 0; j < M[i].length; j++) {
		if (M[i][j] < 0) {
			countNegativos++;
		      }
		
	}
	C.push(countNegativos)
}
console.log(C);