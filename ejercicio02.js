// Sumar los números
function sumNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Contar los números primos
function countPrimes(numbers) {
    return numbers.filter(isPrime).length;
}

// Contar los números pares
function countEvens(numbers) {
    return numbers.filter(num => num % 2 === 0).length;
}

// Calcular el promedio de los números primos
function averagePrimes(numbers) {
    const primes = numbers.filter(isPrime);
    return primes.length > 0 ? sumNumbers(primes) / primes.length : 0;
}

// Calcular el promedio de los números pares
function averageEvens(numbers) {
    const evens = numbers.filter(num => num % 2 === 0);
    return evens.length > 0 ? sumNumbers(evens) / evens.length : 0;
}

// Función auxiliar para determinar si un número es primo
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

module.exports = {
    sumNumbers,
    countPrimes,
    countEvens,
    averagePrimes,
    averageEvens
};
