const prompt = require("prompt-sync")();
let totalSalaryMen=0;
let totalSalaryWomen=0;
let opt = 1;

function calcTotalSalary() {
	const salary = Number(prompt("Digite o salário do funcionário: "));
	let sex='';
      while (sex.toLowerCase() != 'm' && sex.toLowerCase() != 'f') {
	sex = prompt(
		"Digite o sexo do funcionário (F - Feminino/M - Masculino): "
	      );
	if (sex.toLowerCase() == "f") {
		totalSalaryWomen += salary;
	      } else if(sex.toLowerCase()=='m'){
		totalSalaryMen += salary;
	      }else{
		      console.log('Sexo inválido, digite novamente');
	      }
      }
	
}
while (opt != 0) {
calcTotalSalary()
  while (opt != 1 || opt != 0) {
    prompt(" 1 - Continuar \n 0 - Parar");
    opt = Number(prompt(" Escolha uma das opções acima:"));
    if (opt === 1) {
	calcTotalSalary()
    } else if (opt === 0) {
      console.log("Fim do programa");
      break;
    } else {
      console.log("Opção inválida, digite novamente");
    }
  }
}
console.log(
  `O total de salários dos Homens é de ${totalSalaryMen} e o total dos salários das mulheres é de ${totalSalaryWomen}`
);
