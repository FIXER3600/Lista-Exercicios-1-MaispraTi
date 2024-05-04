const prompt = require("prompt-sync")();
const activityHours=parseInt(prompt("Digite a quantidade de horas de atividade por mês: "))
let pointsEarned;
let moneyEarned;
if (activityHours<=10) {
	pointsEarned=2*activityHours;
	
}else if(activityHours>10 && activityHours <=20){
	pointsEarned=5*activityHours;
	
}else if(activityHours>20){
	pointsEarned=10*activityHours;
}
moneyEarned=pointsEarned*0.05;
console.log(`A pessoa fez ${pointsEarned} pontos e obteve R$ ${moneyEarned}`);