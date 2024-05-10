const prompt = require("prompt-sync")();

function readTemplate() {
	const template = prompt("Digite o gabarito (20 caracteres): ");
	return template.split(","); 
    }

function readAnswers() {	
	const input=prompt("Digite suas respostas separadas por vírgula (por exemplo: a,b,c): ")
	return  input.split(",")
}
function countHits(template,answers) {
	let hits=0
	for (let i = 0; i < template.length; i++) {
		if (template[i] === answers[i]) {
			hits++
		}
		
	}
	return hits
}
function showResultTest() {
	let template=readTemplate()
	for (let i = 1; i < 50; i++) {
		console.log(`Aluno ${i}`);
		const answers = readAnswers();
		const numHits=countHits(template,answers)
		if (numHits >= 12) {
			console.log(`Aluno ${i} APROVADO - ${numHits} acertos`);
		}else{
			console.log(`Aluno ${i} REPROVADO - ${numHits} acertos`);
		}
	}
}
console.log(showResultTest());