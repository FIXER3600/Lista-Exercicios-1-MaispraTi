const v = [
  [5, 9, 2, 7, 3, 8, 19, 54, 8, 10],
  [1, 4, 6, 2, 7, 5, 17, 54, 8, 10],
  [3, 8, 9, 1, 4, 6, 15, 54, 8, 10],
  [2, 7, 5, 3, 8, 9, 13, 54, 8, 10],
  [4, 6, 2, 7, 5, 3, 11, 54, 8, 10],
  [9, 1, 4, 6, 2, 7, 10, 54, 8, 10],
  [1, 4, 6, 2, 7, 5, 17, 54, 8, 10],
  [3, 8, 9, 1, 4, 6, 15, 54, 8, 10],
  [2, 7, 5, 3, 8, 9, 13, 54, 8, 10],
  [4, 6, 2, 7, 5, 3, 11, 54, 8, 10],
];
function getMainDiagonal(matriz) {
  const mainDiagonal = [];
  for (let i = 0; i < matriz.length; i++) {
	mainDiagonal.push(matriz[i][i]);
  }
  return mainDiagonal;
}
const result=(mainDiagonal,v)=>{
	for (let i = 0; i < v.length; i++) {
		const elementoDiagonal = mainDiagonal[i];
		for (let j = 0; j < v[i].length; j++) {
		v[i][j] *= elementoDiagonal;
		}
	      }
	      return v
}
console.log(result(getMainDiagonal(v),v));
