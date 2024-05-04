const prompt = require("prompt-sync")();
prompt("------JOKENPÔ------");
let opt = 4;
while (opt != 0) {
  prompt(" 1 - Pedra \n 2 - Papel \n 3 - Tesoura");
  const jogador1 = Number(prompt("Jogador 1:"));
  const jogador2 = Number(prompt("Jogador 2:"));

  if (jogador1 == 1 && jogador2 == 2) {
    console.log("Jogador 2 venceu!");
  } else if (jogador1 == 2 && jogador2 == 1) {
    console.log("Jogador 1 venceu!");
  } else if (jogador1 == 1 && jogador2 == 3) {
    console.log("Jogador 1 venceu!");
  } else if (jogador1 == 3 && jogador2 == 1) {
    console.log("Jogador 2 venceu!");
  } else if (jogador1 == 2 && jogador2 == 3) {
    console.log("Jogador 2 venceu!");
  } else if (jogador1 == 3 && jogador2 == 2) {
    console.log("Jogador 1 venceu!");
  } else if (
    jogador1 != 1 ||
    jogador1 != 2 ||
    jogador1 != 3 ||
    jogador2 != 1 ||
    jogador2 != 2 ||
    jogador2 != 3
  ) {
    console.log("Opção inválida, digite novamente");
    continue;
  }
  while (opt != 4 || opt != 0) {
    prompt(" 4 - Jogar novamente \n 0 - Sair");
    opt = Number(prompt(" Digite uma das opções acima:"));
    if (opt === 4) {
      console.clear();
    } else if (opt === 0) {
      console.log("Jogo encerrado. Até a próxima!");
      break;
    } else {
      console.log("Opção inválida, digite novamente");
    }
  }
}
