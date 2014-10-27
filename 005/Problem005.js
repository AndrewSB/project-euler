function isDivisible(n) {
	for (var i = 1; i < 20; i++) {
		if (n%i != 0) return false;
	}
	return true;
}

function findSmallestDivisible(from, to) {
	for (var i = from; i < to; i++) {
		if (isDivisible(i)) return i;
	};
	return false;
}

console.log(findSmallestDivisible(2519, 100000000000000))