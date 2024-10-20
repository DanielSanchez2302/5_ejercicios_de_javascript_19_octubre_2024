class Calculadora {
    // Método para sumar
    suma(a, b) {
        return a + b;
    }

    // Método para restar
    resta(a, b) {
        return a - b;
    }

    // Método para multiplicar
    multiplicacion(a, b) {
        return a * b;
    }

    // Método para dividir
    division(a, b) {
        // Validación para evitar la división por cero
        if (b === 0) {
            throw new Error("Error: No se puede dividir entre cero.");
        }
        return a / b;
    }
}

// Función para solicitar datos al usuario
function calcular() {
    const calculadora = new Calculadora();
    let continuar = true;

    while (continuar) {
        let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicacion, division o salir)");

        if (operacion === 'salir') {
            continuar = false;
            break;
        }

        let num1 = parseFloat(prompt("Ingresa el primer número:"));
        let num2 = parseFloat(prompt("Ingresa el segundo número:"));

        try {
            let resultado;
            switch (operacion) {
                case 'suma':
                    resultado = calculadora.suma(num1, num2);
                    alert(`El resultado de la suma es: ${resultado}`);
                    break;
                case 'resta':
                    resultado = calculadora.resta(num1, num2);
                    alert(`El resultado de la resta es: ${resultado}`);
                    break;
                case 'multiplicacion':
                    resultado = calculadora.multiplicacion(num1, num2);
                    alert(`El resultado de la multiplicación es: ${resultado}`);
                    break;
                case 'division':
                    resultado = calculadora.division(num1, num2);
                    alert(`El resultado de la división es: ${resultado}`);
                    break;
                default:
                    alert("Operación no válida. Por favor, elige suma, resta, multiplicacion, division o salir.");
            }
        } catch (error) {
            alert(error.message); // Mostrar el mensaje de error
        }
    }
}

// Iniciar el programa
calcular();
