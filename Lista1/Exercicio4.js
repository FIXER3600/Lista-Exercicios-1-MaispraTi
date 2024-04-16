const prompt = require("prompt-sync")();
let nota1=Number(prompt("Digite a nota da primeira avaliação:"));
let nota2=Number(prompt("Digite a nota da segunda avaliação:"))
const media=(nota1+nota2)/2
console.log(`${media>=6? 'PARABÉNS! Você foi aprovado':'Você foi REPROVADO! Estude mais'}`);