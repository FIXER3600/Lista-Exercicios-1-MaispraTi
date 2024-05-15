const transactions = [
	{'id': 1, 'valor': 100, 'data': '2023-04-01', 'categoria': 'Alimentação'},
	{'id': 2, 'valor': 50, 'data': '2023-04-02', 'categoria': 'Transporte'},
	{'id': 3, 'valor': 150, 'data': '2023-04-01', 'categoria': 'Alimentação'},
	{'id': 4, 'valor': 30, 'data': '2023-04-02', 'categoria': 'Transporte'},
    ]
function showTransactionsByCategory(transactions) {
	let newObject={}
	for (const transaction of transactions) {
		if (!newObject[transaction]) {
			newObject[transaction.categoria]=[]
		}
		newObject[transaction.categoria].push(transaction)
	}
	for (const category in newObject) {
		const total = newObject[category].reduce((acc, curr) => acc + curr.valor, 0);
		newObject[category].push({ subtotal: total });
	    }
	return newObject
}
console.log(showTransactionsByCategory(transactions));