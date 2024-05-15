const prompt = require("prompt-sync")();

function validateHour(hour) {
	
	const regex = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;
	return regex.test(hour);
      }
      
      let hours = [];
      let count = 0;
      
      while (count < 5) {
	let hour = prompt('Digite um horário válido (HH:MM:SS):');
	if (validateHour(hour)) {
	 
	  let hourFormated = hour.replace(/:/g, '.');
	  hours.push(hourFormated);
	  count++;
	} else {
	  console.log('Horário inválido. Tente novamente.');
	}
      }
      
      console.log('Horários válidos no formato HH.MM.SS:');
      hours.forEach(hour => console.log(hour));