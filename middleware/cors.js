const corsMiddleware = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);

	// Handle preflight requests
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}

	next();
};

module.exports = corsMiddleware;
