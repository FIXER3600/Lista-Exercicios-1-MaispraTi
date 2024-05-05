const prompt = require("prompt-sync")();
const people=[]
let person=''
for (let i = 1; i < 8; i++) {
	person=prompt(`Digite a ${i}º pessoa: `)
	people.push(person)
	
}
console.log(people.reverse());