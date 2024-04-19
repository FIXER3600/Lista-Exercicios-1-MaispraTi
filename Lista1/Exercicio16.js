function isPrime(num) {
	if (num < 2) {
	    return false;
	}
	let divisor = 2;
	while (divisor <= Math.sqrt(num)) {
	    if (num % divisor === 0) {
		return false;
	    }
	    divisor++;
	}
	return true;
    }
    
    function printFirst50PrimesAbove100() {
	let count = 0;
	let number = 101;
    
	while (count < 50) {
	    if (isPrime(number)) {
		console.log(number);
		count++;
	    }
	    number++;
	}
    }
    
    printFirst50PrimesAbove100();
    