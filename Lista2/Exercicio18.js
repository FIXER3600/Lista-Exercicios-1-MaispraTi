const prompt = require("prompt-sync")();
const functionaryName=prompt("Digite seu nome: ")
const functionaryOffice=prompt("Digite seu cargo: ")
const functionarySalary=prompt("Digite seu salário: ")

const functionary={name:functionaryName,office:functionaryOffice,salary:functionarySalary}
console.log(functionary);