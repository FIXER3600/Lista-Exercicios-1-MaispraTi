const M = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 5, 9],
];
function getSecDiagonal(matriz) {
  const diagonalSec = [];
  for (let i = 0; i < matriz.length; i++) {
    diagonalSec.push(matriz[i][matriz.length - 1 - i]);
  }
  return diagonalSec
}
const sumDiagonalSec = getSecDiagonal(M).reduce((acc, val) => acc + val, 0);
const mediaDiagonalSec = sumDiagonalSec / getSecDiagonal(M).length;
function multMainDiagonal(m) {
  const lines = m.length;
  let mult = [];

  for (let i = 0; i < lines; i++) {
    mult.push(m[i][i] * mediaDiagonalSec);
  }

  return mult;
}
console.log(multMainDiagonal(M));
