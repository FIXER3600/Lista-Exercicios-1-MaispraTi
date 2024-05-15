const M = [
	[1, 2, 3, 4, 5],
	[7, 8, 9, 10, 11],
	[13, 14, 15, 16, 17],
	[19, 20, 21, 22, 23],
	[25, 26, 27, 28, 29],
	
    ];
    const sl = new Array(M.length).fill(0);
   const sc = new Array(M[0].length).fill(0);

    for (let i = 0; i < M.length; i++) {
	for (let j = 0; j < M[0].length; j++) {
		
		sl[i]+=M[i][j]
		sc[j]+=M[i][j]
	}
	
    }
    console.log(sl);
    console.log(sc);