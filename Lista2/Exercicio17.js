const prompt = require("prompt-sync")();
const peopleName=[]
const peopleAges=[]
let name=''
let age=0
for (let i = 1; i < 11; i++) {

	name=prompt(`Digite o nome da ${i}º pessoa: `)
	peopleName.push(name)
	age=Number(prompt(`Digite a idade da ${i}º pessoa: `))
	peopleAges.push(age)
	
}
console.log("Menores de idade das pessoas cadastradas");
for (let i = 1; i < 11; i++) {
	if (peopleAges[i] < 18) {
		console.log(`Nome: ${peopleName[i]}, Idade: ${peopleAges[i]}`);
	}
	
}
