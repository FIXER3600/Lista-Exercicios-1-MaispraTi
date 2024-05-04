const prompt = require("prompt-sync")();
const distance = Number(
  prompt("Digite a distância que deseja percorrer em Km:")
);
const limit = 200;
let ticket = 0;

function calcTicket(distance) {
	
  for (let i = 0; i < distance; i++) {
	distance > limit ? ticket += 0.45 : ticket += 0.50;
  }
  return (ticket.toFixed(2))
}
console.log(`O preço da passagem custará R$ ${calcTicket(distance)}`); 