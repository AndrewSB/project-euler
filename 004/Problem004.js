function isPalindrome(n) {
	var nString = n.toString();
	var length = nString.length;

	for (var i = 0; i < length; i++) {
			if (nString[i] != nString[length-1-i]) return false;
		}
	return true;
}

function getLargestPal(from, to) {
	var largest = 0;
	for (var i = from; i <= to; i++) {
		for (var j = from; j <= to; j++) {
			if (isPalindrome(i*j)) {
				if (i*j > largest) largest = i*j;
			}
		};
	};
	return largest;
}

console.log(getLargestPal(900,999))