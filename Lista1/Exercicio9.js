const prompt = require("prompt-sync")();
let codeRegion = Number(prompt("Digite o código de origem do produto:"));
switch (true) {
  case 1:
    console.log("Sul");
    break;
  case 2:
    console.log("Norte");
    break;
  case 3:
    console.log("Leste");
    break;
  case 4:
    console.log("Oeste");
    break;
  case (5, 6):
    console.log("Nordeste");
    break;
  case codeRegion >= 7 && codeRegion <=9:
    console.log("Sudeste");
    break;
  case codeRegion >= 10 && codeRegion <= 20:
    console.log("Centro-Oeste");
    break;
  case codeRegion >= 25 && codeRegion <= 50:
    console.log("Nordeste");
    break;
  default:
    console.log("Produto importado");
    break;
}
