const prompt = require("prompt-sync")();

let hotels=[
	{id:0,nome:"Holiday Inn",cidade:'Sao Paulo',quartosTotais:100,quartosDisponiveis:60},
	{id:1,nome:"Plaza",cidade:'Sao Paulo',quartosTotais:100,quartosDisponiveis:60}
]
let bookins=[
	{idReserva:0,idHotel:0,nomeCliente:"Augusto"},
	{idReserva:1,idHotel:0,nomeCliente:"Gabriel"},
	{idReserva:2,idHotel:0,nomeCliente:"Luana"},
]
function addHotel() {
	console.log("Informe nome, cidade, quantidade de quartos totais e quantidade de quartos disponíveis para adicionar um hotel (Ex: Holiday Inn, São Paulo, 100,60)");
	const hotel=prompt("Digite conforme o indicado: ");
	const [nome, cidade, quartosTotais, quartosDisponiveis] = hotel.split(",")
	let lastId=hotels[hotels.length-1].id
	lastId++
	hotels.push({id:lastId,nome,cidade,quartosTotais,quartosDisponiveis})
	return hotels
}
function cancelBookin() {
	id=Number(prompt("Digite o id da reserva que deseja cancelar sua reserva: "))
	nameHotel=prompt("Digite o nome do hotel do qual a vaga pertence: ")
	findedBookin=bookins.filter((bookin)=>bookin.idReserva!=id)
	findedHotel=hotels.map(function(hotel) {
		if (hotel.nome === nameHotel) {
		    return {id:hotel.id,nome:hotel.nome,cidade:hotel.cidade, quartosTotais:hotel.quartosTotais,quartosDisponiveis: hotel.quartosDisponiveis + 1}
		} else{
			return hotel
		}
	    })
	  
	bookins=findedBookin
	hotels=findedHotel
	return findedHotel

}
function makeBookin() {
	newBookin=prompt("Digite os dados da nova reserva informando o hotel e o cliente separado por vírgula (Ex: Holiday Inn, Guilherme): ")

}
function getAllBookins() {
	return bookins
}
function getHotelByCity(city) {
	const hotelsFounded=hotels.filter((hotel)=>hotel.cidade==city)

	return hotelsFounded
}
function useSystem() {
	console.log("Bem-vindo ao sistema de reserva de hotéis!");
	console.log("Selecione uma ação:  \n1- Listar reservas;\n2- Adicionar um hotel;\n3- Buscar hotel por cidade;\n4- Fazer uma reserva;\n5- Cancelar uma reserva;\n6- Sair.");
	let opt
	while (opt!=6) {
		console.log("Selecione uma ação:  \n1- Listar reservas;\n2- Adicionar um hotel;\n3- Buscar hotel por cidade;\n4- Fazer uma reserva;\n5- Cancelar uma reserva;\n6- Sair.");
		opt=Number(prompt("Digite o número de acordo com a ação escolhida:"))
		switch (opt) {
			case 1:
				const bookins=getAllBookins()
				console.log(`Lista das reservas: `);
				console.log(bookins);
				break
				
			case 2:
				const hotel=addHotel()
				console.log( hotel);
				break;
			case 3:
				city=prompt("Digite a cidade que deseja ver os hotéis: ")
				const hotels=getHotelByCity(city)
				console.log(`Aqui estão os hotéis na cidade de ${city}:`);
				console.log(hotels)
				break;
					
			case 4:
				console.log("Então vamos fazer uma reserva!");
				makeBookin()
				
				break;
			case 5:
				console.log("Vamos cancelar sua reserva...");
				
				const newBookins=cancelBookin()
				console.log(newBookins);
				break;
			case 6:
				console.log("Fim do programa");

				break;
			default:
				console.log("Operação inválida.");
				break;
		}
	}
	
}
useSystem()
