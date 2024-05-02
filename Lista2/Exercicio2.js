const prompt = require("prompt-sync")();
const carVelocity= Number(prompt("Digite a velocidade do carro:"));
const limit=80
let trafficTicket=0

function trafficPunishment(carVelocity) {

	
	for (let i = limit; i < carVelocity; i++) {
		trafficTicket+=5
		
	}
	if (carVelocity>limit) {
		return `Você será multado em ${trafficTicket} reais`;
	}else{
		return "Boa viagem!";
	}
}
console.log(trafficPunishment(carVelocity)); 
