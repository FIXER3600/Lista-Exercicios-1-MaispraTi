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
	const quartosTotaisInt = parseInt(quartosTotais.trim(), 10);
	const quartosDisponiveisInt = parseInt(quartosDisponiveis.trim(), 10);
	const name=nome.trim()
	const findHotel=hotels.find((hotel)=>hotel.nome==name)
	if (findHotel) {
		console.log("Desculpe, já há um hotel com esse nome, digite outro nome para o novo hotel");
		return
	}
	const city=cidade.trim()
	let lastId=hotels[hotels.length-1].id
	lastId++
	hotels.push({id:lastId,name,city,quartosTotaisInt,quartosDisponiveisInt})
	return hotels
}
function cancelBookin() {
	id=Number(prompt("Digite o id da reserva que deseja cancelar sua reserva: "))
	nameHotel=prompt("Digite o nome do hotel do qual a vaga pertence: ")
	findedBookin=bookins.filter((bookin)=>bookin.idReserva!=id)
	findedHotel=hotels.map(function(hotel) {
		if (hotel.nome === nameHotel && hotel.quartosDisponiveis < hotel.quartosTotais) {
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
	let hotelId;
	let client;
    
	let hotelFound = false;
	while (!hotelFound) {
	    console.log("Digite os dados da nova reserva informando o hotel e o cliente separado por vírgula (Ex: Holiday Inn, Guilherme): ");
	    newBooking = prompt("Digite conforme o indicado: ");
	    const [inputHotelName, inputClient] = newBooking.split(",");
	    const matchedHotels = hotels.filter((hotel) => hotel.nome === inputHotelName.trim());
	    if (matchedHotels.length === 1) {
		hotelId = matchedHotels[0].id;
		hotelName = matchedHotels[0].nome;
		hotelFound = true; // Indica que o hotel foi encontrado e saímos do loop
		client = inputClient.trim(); // Define o valor de client com o valor fornecido pelo usuário
	    } else {
		console.log("Hotel não encontrado. Por favor, digite o nome do hotel novamente.");
	    }
	}
	const hotelWithAvailableRooms = hotels.find((hotel) => hotel.id === hotelId && hotel.quartosDisponiveis > 0);
	if (!hotelWithAvailableRooms) {
	    console.log("Desculpe, não há quartos disponíveis neste hotel para reserva.");
	    return;
	}
	const newHotelOccupation = hotels.map((hotel) => {
	    if (hotel.id === hotelId && hotel.quartosDisponiveis > 0) {
		return {
		    id: hotel.id,
		    nome: hotel.nome,
		    cidade: hotel.cidade,
		    quartosTotais: hotel.quartosTotais,
		    quartosDisponiveis: hotel.quartosDisponiveis - 1
		};
	    } else {
		return hotel;
	    }
	});
    
	let lastIdBooking = bookins[bookins.length - 1].idReserva;
	lastIdBooking++;
	bookins.push({ idReserva: lastIdBooking, idHotel: hotelId, nomeCliente: client });
	hotels = newHotelOccupation;
	console.log(newHotelOccupation);
	return bookins;
    }
    
function getAllBookins() {
	return bookins
}
function getHotelByCity(city) {
	const hotelsFounded=hotels.filter((hotel)=>hotel.cidade==city)

	return hotelsFounded
}
function reportVacancies() {
	const report = hotels.map((hotel) => {
		return `${hotel.nome}: ${hotel.quartosDisponiveis} vagas`;
	    });
	
	return report
}
function addReview() {
	let hotelName;
	let rating;
    
	let hotelFound = false;
	while (!hotelFound) {
	    console.log("Por favor, informe o nome do hotel onde você esteve");
	    hotelName = prompt("Digite o nome do hotel: ");
    
	    const matchedHotels = hotels.filter((hotel) => hotel.nome === hotelName.trim());
	    if (matchedHotels.length === 1) {
		hotelFound = true;
	    } else {
		console.log("Hotel não encontrado. Por favor, digite o nome do hotel novamente.");
	    }
	}
    
	// Solicitar a nota da estadia
	console.log(`Você esteve no hotel ${hotelName}.`);
	rating = parseInt(prompt("Por favor, avalie sua estadia de 1 a 5:"));
    
	// Verificar se a nota está dentro do intervalo válido (1 a 5)
	if (isNaN(rating) || rating < 1 || rating > 5) {
	    console.log("Avaliação inválida. Por favor, forneça uma nota de 1 a 5.");
	    return;
	}
    
	// Encontrar o hotel correspondente e adicionar a avaliação
	const hotel = hotels.find((hotel) => hotel.nome === hotelName.trim());
	if (hotel) {
	    if (!hotel.avaliacoes) {
		hotel.avaliacoes = [];
	    }
	    hotel.avaliacoes.push(rating);
	    console.log(`Sua avaliação de ${rating} foi adicionada ao hotel ${hotelName}.`);
	} else {
	    console.log("Erro ao adicionar avaliação. Hotel não encontrado.");
	}
    }
    
function useSystem() {
	console.log("Bem-vindo ao sistema de reserva de hotéis!");
	let opt
	while (opt!=8) {
		console.log("Selecione uma ação:  \n1- Listar reservas;\n2- Adicionar um hotel;\n3- Buscar hotel por cidade;\n4- Fazer uma reserva;\n5- Cancelar uma reserva;\n6- Gera relatório de vagas\n7- Avaliar estadia\n8- Sair.");
		opt=Number(prompt("Digite o número de acordo com a ação escolhida:"))
		switch (opt) {
			case 1:
				let bookinsList=getAllBookins()
				console.log(`Lista das reservas: `);
				console.log(bookinsList);
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
				let newBookins=makeBookin()
				console.log(newBookins);
				break;
			case 5:
				console.log("Vamos cancelar sua reserva...");
				
				const cancelBookins=cancelBookin()
				console.log(cancelBookins);
				break;
			case 6:
				console.log("Aí está o relatório de vagas:");
				const report=reportVacancies()
				console.log(report);
				break;
			case 7:
				console.log("Já vai embora? Por favor, deixe seu feedback!");
				
				addReview()
				break;
			case 8:
				console.log("Fim do programa");

				break;
			default:
				console.log("Operação inválida.");
				break;
		}
	}
	
}
useSystem()
