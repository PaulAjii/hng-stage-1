const express = require('express');

// App Instance
const app = express();

// Middlewares
const corsMiddleware = require('./middleware/cors');

// Helper functions
const isPrimeNumber = require('./utils/isPrime');
const isPerfectNumber = require('./utils/isPerfect');
const isEvenNumber = require('./utils/isEven');
const digitSumNum = require('./utils/digitSum');
const isArmstrongNum = require('./utils/isArmstrong');

// Apply Middlewares
app.use(corsMiddleware);

// routes
app.get('/api/classify-number', async (req, res) => {
	try {
		const { number } = req.query;

		if (!number || isNaN(+number)) {
			return res.status(400).json({
				error: true,
				number: number,
			});
		}

		const response = await fetch(`http://numbersapi.com/${number}/math`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		res.status(200).json({
			number: +number,
			is_prime: isPrimeNumber(+number),
			is_perfect: isPerfectNumber(+number),
			properties: isArmstrongNum(Math.abs(+number).toString())
				? ['armstrong', isEvenNumber(+number)]
				: [isEvenNumber(+number)],
			digit_sum: +digitSumNum(Math.abs(+number).toString()),
			fun_fact: await response.text(),
		});
	} catch (error) {
		res.status(500).json({
			error: true,
			msg: error.message,
		});
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
