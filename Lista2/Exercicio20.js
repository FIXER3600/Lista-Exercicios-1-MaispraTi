const prompt = require("prompt-sync")();
const functionaries=[]
let count=0
function calculateDiscountINSS(salaryBrute) {
	const taxINSS = 0.12; // Taxa de desconto do INSS (12%)
	return salaryBrute * taxINSS;
      }
      function calculateLiquidSalary(salaryBrute) {
	const discountINSS = calculateDiscountINSS(salaryBrute);
	return salaryBrute - discountINSS;
      }
while (count<80) {
	
	const functionaryRegistration=prompt("Digite seu número de matrícula: ")
const functionaryName=prompt("Digite seu nome: ")
const functionarySalary=prompt("Digite seu salário bruto: ")
const discountINSS=calculateDiscountINSS(functionarySalary)
const liquidSalary=calculateLiquidSalary(functionarySalary)
	functionaries.push({registration:functionaryRegistration,name:functionaryName,salary:functionarySalary,deductionINSS:discountINSS,liquidSalary:liquidSalary})
	count++
}


functionaries.forEach((functionary)=>{
	console.log('Matrícula:', functionary.registration);
	console.log('Nome:', functionary.name);
	console.log('Salário bruto:', functionary.salary);
	console.log('Dedução INSS:',functionary.deductionINSS);
	console.log('Salário líquido:',functionary.liquidSalary);
	console.log('---'); // Separador
})
