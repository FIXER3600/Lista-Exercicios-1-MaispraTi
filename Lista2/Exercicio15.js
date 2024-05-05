const prompt = require("prompt-sync")();
const numbers=[]
const positions=[]
let number=0
for (let i = 1; i < 11; i++) {
	number=prompt(`Digite o ${i}º número: `)
	numbers.push(number)
	if (number%2==0) {
		positions.push(numbers.indexOf(number))
	}
}
console.log("Os números pares digitados são: ",numbers.filter((value) => value % 2 == 0));
console.log("As posições que eles ocupam são, respectivamente: ",positions);