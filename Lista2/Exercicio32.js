const M = [
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
	[1,2,3,4,5,6,7,8,9,10,11,12,13],
      ];
      function  largerElementModule(line) {
	let larger = Math.abs(line[0]);
	for (let i = 1; i < line.length; i++) {
	  const element = Math.abs(line[i]);
	  if (element > larger) {
	    maior = element;
	  }
	}
	return larger;
      }
      
      // Função para dividir todos os elementos de uma linha pelo maior elemento em módulo
      function divideByLargerElementModule(line, larger) {
	const lineModified = [];
	for (let i = 0; i < line.length; i++) {
		lineModified.push(line[i] / larger);
	}
	return lineModified;
      }
      
      // Calculando e exibindo a matriz modificada
      for (let i = 0; i < M.length; i++) {
	const line = M[i];
	const largerElement = largerElementModule(line);
	const lineModified = divideByLargerElementModule(line, largerElement);
      
	console.log(`Linha ${i + 1} (original): ${line}`);
	console.log(`Linha ${i + 1} (modificada): ${lineModified}`);
      }
