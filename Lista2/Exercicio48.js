const inventarioLojaA={
item1:20,
item2:50,
item5:40
}
const inventarioLojaB={
item4:60,
item5:25,
item1:20
}
function concatObjects(obj1,obj2) {
	let newObject={...obj1,...obj2};
	for (const prop1 in obj1) {
		for (const prop2 in obj2) {
			if (prop1==prop2) {
				newObject[prop1]=obj1[prop1]+obj2[prop2];
			}
		}
	}
	    return newObject;
}
console.log(concatObjects(inventarioLojaA,inventarioLojaB));