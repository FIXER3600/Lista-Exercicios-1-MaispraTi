const v=[
	[5, 9, 2, 7, 3, 8,19],
	[1, 4, 6, 2, 7, 5,17],
	[3, 8, 9, 1, 4, 6,15],
	[2, 7, 5, 3, 8, 9,13],
	[4, 6, 2, 7, 5, 3,11],
	[9, 1, 4, 6, 2, 7,10]
	]
	
function findNumber(a,matriz) {
	let equals=0;
	for (let i = 0; i < matriz.length; i++) {
		x[i]=[]
		for (let j = 0; j < matriz[i].length; j++) {
			if (matriz[i][j]==a) {
				equals++
			}
		}
		
	}
	return equals
}
function differentNumbers(a,matriz) {
	let x=[]
	for (let i = 0; i < matriz.length; i++) {
		x[i]=[]
		for (let j = 0; j < matriz[i].length; j++) {
			if (matriz[i][j] !== a) {
				x[i][j] = matriz[i][j];
			    }
		}
		
	}
	return x
}
console.log(findNumber(2,v));
console.log(differentNumbers(2,v));