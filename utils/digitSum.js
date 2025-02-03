const digitSum = (n) => {
	return n.split('').reduce((a, b) => +a + +b);
};

module.exports = digitSum;
