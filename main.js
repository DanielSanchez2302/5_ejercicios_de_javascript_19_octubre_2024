/*const readline = require('readline');
const validateCard = require('./validateCard');

// Crear la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para solicitar el número de tarjeta de crédito
function getCardNumber(callback) {
    rl.question('Por favor, ingresa el número de tu tarjeta de crédito: ', (cardNumber) => {
        if (/^\d{14,16}$/.test(cardNumber)) {
            callback(cardNumber);
        } else {
            console.log("Número de tarjeta inválido. Asegúrate de ingresar solo números de 14 a 16 dígitos.");
            getCardNumber(callback); // Vuelve a solicitar si es inválido
        }
    });
}

// Función para solicitar el tipo de tarjeta al operador
function getCardTypeFromOperator(callback) {
    console.log("\nTipos de tarjeta:");
    console.log("1. American Express");
    console.log("2. Diners Club");
    console.log("3. Discover");
    console.log("4. Mastercard");
    console.log("5. Visa");

    rl.question("Elige el tipo de tu tarjeta (1-5): ", (option) => {
        switch (option) {
            case '1':
                callback('American Express');
                break;
            case '2':
                callback('Diners Club');
                break;
            case '3':
                callback('Discover');
                break;
            case '4':
                callback('Mastercard');
                break;
            case '5':
                callback('Visa');
                break;
            default:
                console.log("Opción inválida.");
                getCardTypeFromOperator(callback); // Vuelve a solicitar si es inválido
        }
    });
}

module.exports = {
    getCardNumber,
    getCardTypeFromOperator
};*/

const readline = require('readline');

// Crear la interfaz de readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para solicitar los números al usuario
function getNumbers(callback) {
    rl.question('¿Cuántos números deseas ingresar?: ', (count) => {
        let numbers = [];
        let numCount = parseInt(count);
        
        if (isNaN(numCount) || numCount <= 0) {
            console.log("Por favor, ingresa un número válido.");
            getNumbers(callback);
        } else {
            function askForNumber(index) {
                if (index < numCount) {
                    rl.question(`Ingresa el número ${index + 1}: `, (num) => {
                        if (!isNaN(num)) {
                            numbers.push(parseInt(num));
                            askForNumber(index + 1);
                        } else {
                            console.log("Por favor, ingresa un número válido.");
                            askForNumber(index);
                        }
                    });
                } else {
                    callback(numbers);
                }
            }
            askForNumber(0);
        }
    });
}

// Función para solicitar la operación
function getOperation(callback) {
    console.log("\n¿Qué operación deseas realizar?");
    console.log("a. Sumar los números");
    console.log("b. Contar los números primos");
    console.log("c. Contar los números pares");
    console.log("d. Calcular el promedio de los números primos");
    console.log("e. Calcular el promedio de los números pares");

    rl.question("Elige una opción (a-e): ", (option) => {
        if (['a', 'b', 'c', 'd', 'e'].includes(option)) {
            callback(option);
        } else {
            console.log("Opción inválida.");
            getOperation(callback);
        }
    });
}

module.exports = {
    getNumbers,
    getOperation,
    rl // Exportamos rl para cerrarlo después en app.js
};

