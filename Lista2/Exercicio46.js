const sales=[
	{seller:"Guilherme",value:20},
	{seller:"Guilherme",value:30},
	{seller:"Carlos",value:50},
	{seller:"Carlos",value:10},
	{seller:"Cintia",value:40},
]
function totalSells(sales) {
	let newObject={}
	for (const sale of sales) {
		const { seller, value } = sale;
		if (newObject[seller]) {
			newObject[seller] += value;
		} else {
			newObject[seller] = value;
		}
	}
	return newObject
}
console.log(totalSells(sales));