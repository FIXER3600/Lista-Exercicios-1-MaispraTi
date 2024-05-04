const prompt = require("prompt-sync")();
const carType = prompt("Digite o tipo de Carro (popular ou luxo): ");
const daysRented = parseInt(prompt("Digite a quantidade de dias de aluguel: "));
const distance = parseInt(
  prompt("Digite a quantidade de quilômetros percorridos: ")
);
let costDay;
let costKm;

if (carType === "popular") {
  costDay = 90;
  costKm = distance <= 100 ? 0.2 : 0.1;
} else if (carType === "luxo") {
  costDay = 150;
  costKm = distance <= 200 ? 0.3 : 0.25;
} else {
  console.log("Tipo de carro inválido.");
}

const valueToPay = costDay * daysRented + costKm * distance;
console.log( `O preço a ser pago pelo aluguel do carro é:  R$ ${valueToPay.toFixed(2)}`);
