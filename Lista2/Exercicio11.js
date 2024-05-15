const prompt = require("prompt-sync")();
const firstTerm=Number(prompt("Digite o primeiro termo de uma PA: "))
const reason=Number(prompt("Digite a razão da PA: "))
let PA = [];
let sum=0;
  for (let i = 1; i < 11; i++) {
    PA.push(firstTerm + i * reason);
  }

  sum=PA.reduce((acc,act)=>acc+act)
  console.log(`Os elementos da PA são: ${PA} e a soma é ${sum}`);