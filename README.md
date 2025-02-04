# Number Classification API

This is a simple Node.js and Express.js project that classifies numbers based on various properties. It provides a single endpoint to analyze a number and return its properties, such as whether it is even, prime, perfect, or an Armstrong number. Additionally, it fetches a fun fact about the number from an external API and calculates the sum of its digits.

---

## Features

The API analyzes a number and returns the following in a single JSON response:

1. **Input Number**: The number provided in the request query.
2. **Even Check**: `true` or `false` based on whether the number is even.
3. **Prime Check**: `true` or `false` based on whether the number is prime.
4. **Perfect Check**: `true` or `false` based on whether the number is perfect.
5. **Number Properties**: An array of properties such as `["armstrong", "even"]` if the number is both an Armstrong number and even, or `["even"]` if it is only even.
6. **Fun Fact**: A fun fact about the number fetched from the [Numbers API](http://numbersapi.com/).
7. **Sum of Digits**: The sum of the digits of the number.

---

## Installation

1. Clone the repository:

    - using https

    ```bash
    git clone https://github.com/PaulAjii/hng-stage-1.git
    cd hng-stage-1
    ```

    - using SSH

    ```bash
    git clone git@github.com:PaulAjii/hng-stage-1.git
    cd hng-stage-1
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

4. The server will run on `http://localhost:3000`.

---

## API Endpoint

### Analyze a Number

-   **Endpoint**: `/api/classify-number`
-   **Method**: `GET`
-   **Query Parameter**: `number` (the number to analyze)
-   **Response**:
    ```json
    {
    	"number": 42,
    	"isEven": true,
    	"isPrime": false,
    	"isPerfect": false,
    	"properties": ["even"],
    	"funFact": "42 is the answer to the Ultimate Question of Life, the Universe, and Everything.",
    	"digitSum": 6
    }
    ```

---

## Helper Functions

All helper functions are located in the `utils` folder:

1. **`isEven.js`**: Checks if a number is even.
2. **`isPrime.js`**: Checks if a number is prime.
3. **`isPerfect.js`**: Checks if a number is perfect.
4. **`isArmstrong.js`**: Checks if a number is an Armstrong number.
5. **`digitSum.js`**: Calculates the sum of the digits of a number.

---

## Example Usage

### Analyze the number `42`

`GET /api/classify-number?number=42`

**Response**:

```json
{
	"number": 42,
	"isEven": true,
	"isPrime": false,
	"isPerfect": false,
	"properties": ["even"],
	"funFact": "42 is the answer to the Ultimate Question of Life, the Universe, and Everything.",
	"digitSum": 6
}
```

### Analyze the number `153`

`GET /api/classify-number?number=153`

**Response**:

```json
{
	"number": 153,
	"isEven": false,
	"isPrime": false,
	"isPerfect": false,
	"properties": ["armstrong", "odd"],
	"funFact": "153 is a narcissistic number, also known as a pluperfect number.",
	"digitSum": 9
}
```

---

## Technologies Used

-   **Node.js**: Runtime environment.
-   **Express.js**: Web framework for building the API.
-   **Axios**: For making HTTP requests to the Numbers API.

---

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open a pull request.
