const isArmstrong = (num) => {
	return (
		+num === num.split('').reduce((a, b) => a + Math.pow(+b, num.length), 0)
	);
};

module.exports = isArmstrong;
