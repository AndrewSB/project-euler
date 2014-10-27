function genFib(n) {
	if (n==0 || n==1) return n;
	else return genFib(n-1) + genFib(n-2);
}

function calculate() {
	var count = 0;
	for (var i = 0; i < 10000; i++) {
	var currentFib = genFib(i);
	if (currentFib > 4000000) return count;
	if (currentFib%2 == 0) count+=currentFib;
};
}

console.log(calculate());