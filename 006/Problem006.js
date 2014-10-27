function SumOfSqaures(bound) {
	var count = 0;
	for (var i = 0; i <= bound; i++) {
		count += (i*i);
	};	
	return count;

}

function SquareOfSums(bound) {
	var count = 0;
	for (var i = 0; i <= bound; i++) {
		count += i;
	};
	return (count*count);
}

console.log(SquareOfSums(100)-SumOfSqaures(100))