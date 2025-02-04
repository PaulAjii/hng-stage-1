const express = require('express');

const app = express();

// Middlewares
const corsMiddleware = require('./middleware/cors');
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
				number: number,
				error: true,
			});
		}

		const response = await fetch(
			`http://numbersapi.com/${Math.abs(+number).toString()}/math`
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		res.status(200).json({
			number: Math.abs(number),
			is_prime: isPrimeNumber(Math.abs(+number)),
			is_perfect: isPerfectNumber(Math.abs(+number)),
			properties: isArmstrongNum(Math.abs(+number).toString())
				? ['armstrong', isEvenNumber(Math.abs(+number))]
				: [isEvenNumber(Math.abs(+number))],
			digit_sum: digitSumNum(Math.abs(+number).toString()),
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
