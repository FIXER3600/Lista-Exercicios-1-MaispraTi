const randomNumber=[]
for (let i = 0; i < 20; i++) {

 randomNumber.push(Math.floor(Math.random() * 100));
	
}
console.log(randomNumber.sort((a,b)=>a-b));