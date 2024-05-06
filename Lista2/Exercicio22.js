const prompt = require("prompt-sync")();
let opt=''
const people=[]
let count
let salaries=0
let sons=0
let sumSons=0
let salaryAverage=0
let sonsAverage=0
let biggestSalary=0
let percentSalary=0
while (opt!='S') {
	const peopleSalary=Number(prompt("Digite seu salário: "))
	const peopleSons=Number(prompt("Digite quantos filhos possui: "))
count++
	people.push({family:count,salary:peopleSalary,sons:peopleSons})
	while (opt != 'S' || opt != 'N') {
		prompt(" Deseja parar? S - Sim \n N - Não");
		opt = prompt(" Digite uma das opções acima:");
		if (opt === 'N') {
			break;
		} else if (opt === 'S') {
		console.log(	searchPopulation(people));
		  console.log("Pesquisa encerrada.");
		
		  break;
		} else {
		  console.log("Opção inválida, digite novamente");
		}
	      }
}
function searchPopulation(people) {
	salaries= people.map((person)=>person.salary);
	sons=people.map((person)=>person.sons)
	sumSalary=salaries.reduce((acc,act)=>acc+act)
	sumSons=sons.reduce((acc, act) => acc + act);
	salaryAverage=sumSalary/people.length
	sonsAverage=sumSons/people.length
	biggestSalary=Math.max(...salaries)
	percentSalary=people.filter((person)=>person.salary <= 350)/100
	
	return `A média salarial da população é de: ${sumSalary} \n
	A média de filhos é de ${sonsAverage} \n
	O maior salário é de: R$ ${biggestSalary} \n
	E o percentual salarial de pessoas que recebem até R$ 350,00 é de ${percentSalary}%`
}

