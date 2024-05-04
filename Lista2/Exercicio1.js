const prompt = require("prompt-sync")();
const cigarretsDays= Number(prompt("Digite quantos cigarros você fuma por dia:"));
const smokingYears=Number(prompt("Digite há quantos anos você fuma:"))

const minutesAnHour=60
const hoursPerDay=24
const timeLostPerCigarret=10
const daysPerYear=365

const lostDaysPerCigarret=timeLostPerCigarret/(minutesAnHour/hoursPerDay)
const lostDays=((daysPerYear*smokingYears)*cigarretsDays)*lostDaysPerCigarret
console.log(`Você perdeu, aproximadamente, ${lostDays} dias fumando ${cigarretsDays} cigarros em ${smokingYears} anos`);