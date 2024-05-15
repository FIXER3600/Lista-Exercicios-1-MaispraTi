function calcIMC(alt,sex) {
	let imc=0
	if (sex=='M') {
		imc=72.7*alt-58
	}else if(sex=='F'){
		imc=62.1*alt-44.7
	}else{
		return 'Sexo inválido, informe M para masculino e F para Feminino'
	}
	return "O peso ideal é: "+imc
}
console.log(calcIMC(1.70,'M'));