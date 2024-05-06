let MI = [];
for(let i=0; i<7; i++) {
    MI[i] = [];
    for(let j=0; j<7; j++) {
        MI[i][j] = i === j ? 1 : 0;
    }
}


for(let i=0; i<7; i++) {
    console.log(MI[i].join(' '));
}