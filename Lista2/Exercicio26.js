const a = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
      ];
      
      const b = [
	[10, 11, 12],
	[13, 14, 15],
	[16, 17, 18],
      ];
    if (a[0].length !== b.length) {
        console.log("O número de colunas da matriz A deve ser igual ao número de linhas da matriz B.");
        return;
    }
    
    var P = new Array(a.length);    
    for (var i = 0; i < a.length; i++) {
        P[i] = new Array(b[0].length);
        for (var j = 0; j < b[0].length; j++) {
            P[i][j] = 0;
            for (var k = 0; k < a[0].length; k++) {
                P[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    
    console.log("Matriz Produto P:");
    console.log(P);
    