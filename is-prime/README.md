# Implementation of algorithms for searching and checking prime numbers

The solution to this algorithm includes naive execution, optimized and a method called "Erastofen sieve" and a comparison of the time of their execution

## isPrimeNumber

Checks if a number is prime using optimizations:

 - Does not process even values
 - Does not process values multiple of five
 - Limits the minimum required value to the square root of the number being checked

	Average execution time
	143ms for 10000 checked values

## isPrimeNumberSimple

Checks if a number is prime sorting through all options from n to 2

	Average execution time
	85ms for 10000 checked values

## isPrimeNumberErastophene (superhot 🌶)

Checks if a number is prime using the Erastofen method

	Average execution time
	3ms for 10000 checked values


## Usage

For run example

```sh
npm start OR yarn start
```

For run tests

```sh
npm test OR yarn test
```
