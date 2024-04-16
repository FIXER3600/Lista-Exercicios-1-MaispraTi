const prompt = require("prompt-sync")();
let qtdEleitores=Number(prompt("Digite a quantidade de eleitores:"));
let brancos=Number(prompt("Digite a quantidade de votos brancos:"));
let nulos=Number(prompt("Digite a quantidade de votos nulos:"));
let validos=Number(prompt("Digite a quantidade de votos válidos:"));
console.log(`${((brancos/qtdEleitores)*100)} percentual de votos brancos \n
${((nulos/qtdEleitores)*100)} percentual de votos nulos \n
${((validos/qtdEleitores)*100)} percentual de votos válidos \n	`);