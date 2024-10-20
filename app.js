/*const main = require('./main');
const validateCard = require('./validateCard');

// Solicitar el número de tarjeta de crédito
main.getCardNumber((cardNumber) => {
    // Solicitar el tipo de tarjeta al operador
    main.getCardTypeFromOperator((operatorCardType) => {
        // Validar el tipo de tarjeta basado en el número ingresado
        const actualCardType = validateCard.getCardType(cardNumber);

        if (actualCardType) {
            if (actualCardType === operatorCardType) {
                console.log(`El número ingresado es correcto y pertenece a una tarjeta ${actualCardType}.`);
            } else {
                console.log(`El número ingresado pertenece a una tarjeta ${actualCardType}, pero seleccionaste ${operatorCardType}.`);
            }
        } else {
            console.log("El número de tarjeta no corresponde a ningún tipo de tarjeta reconocido.");
        }

        // Cerrar la interfaz readline
        main.rl.close();
    });
});*/

const main = require('./main');
const operations = require('./operations');

// Solicitar los números
main.getNumbers((numbers) => {
    // Solicitar la operación a realizar
    main.getOperation((operation) => {
        let result;

        switch (operation) {
            case 'a':
                result = operations.sumNumbers(numbers);
                console.log(`La suma de los números es: ${result}`);
                break;
            case 'b':
                result = operations.countPrimes(numbers);
                console.log(`La cantidad de números primos es: ${result}`);
                break;
            case 'c':
                result = operations.countEvens(numbers);
                console.log(`La cantidad de números pares es: ${result}`);
                break;
            case 'd':
                result = operations.averagePrimes(numbers);
                console.log(`El promedio de los números primos es: ${result}`);
                break;
            case 'e':
                result = operations.averageEvens(numbers);
                console.log(`El promedio de los números pares es: ${result}`);
                break;
            default:
                console.log("Opción no válida.");
        }

        // Cerrar la interfaz readline
        main.rl.close();
    });
});

